"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { validateEmail , validatePassword } from '@/utils/auth';
import { Eye , EyeSlash } from 'iconsax-react';
import {RepoFactory} from '@/BaseRepository/Factory';
import classes from "./style/Auth.module.scss";

function SigninForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: false, password: false, general: false });
    const [loading, setLoading] = useState(false);

    const authRepository = RepoFactory.get("auth");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const emailChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, email: false, general: false }));
    };

    const passwordChangeHandler = (e:React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, password: false, general: false }));
    };

    const signinHandler = async (event:any) => {
        event.preventDefault();
        setLoading(true);
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        setErrors({
            email: !isValidEmail,
            password: !isValidPassword,
            general: false,
        });

        if (isValidEmail && isValidPassword) {
            try {
                await authRepository.signIn(email, password);
                
                alert(' خوش آمدید!');
                window.location.href = '/dashboard';
            } catch (error) {
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };



    return (
        <div className={classes.authPage} dir='rtl'>
            <div className={classes.card}>
                <form onSubmit={signinHandler} className={classes.cardBody}>
                    <div className="text-center mb-2.5">
                        <h3 className={classes.heading}>ورود</h3>
                        <div className="flex items-center justify-center font-medium">
                            <span className="text-2sm text-gray-700 me-1.5">
                                نیاز به حساب کابری دارید؟
                            </span>
                            <Link className={classes.link} href="/auth/signup">
                                ثبت نام
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className={classes.formLabel}>ایمیل</label>
                        <input 
                            className={classes.input} 
                            placeholder="email@email.com" 
                            type="email" 
                            value={email}
                            onChange={emailChangeHandler}
                            required 
                            aria-invalid={errors.email ? "true" : "false"} />
                        {errors.email && <p className={classes.errorText}>ایمیل وارد شده صحیح نمی باشد!</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between gap-1">
                            <label className={classes.formLabel}>رمز عبور</label>
                            <Link className={`${classes.link}`} href="/auth/enter-email/">فراموشی رمز عبور؟</Link>
                        </div>
                        <div className={classes.input}>
                            <input
                                name="user_password" 
                                placeholder="رمز عبور را وارد کنید" 
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={passwordChangeHandler} 
                                required
                                aria-invalid={errors.password ? "true" : "false"} />
                            <button 
                                type="button" 
                                onClick={togglePasswordVisibility} 
                                className={classes.btnIcon}>
                                {showPassword ? <Eye size="18" /> : <EyeSlash size="18" />}
                            </button>
                        </div>
                        {errors.password && <p className={classes.errorText}>رمز عبور وارد شده معتبر نمی باشد!</p>}
                    </div>

                    {errors.general && <p className={classes.errorText}>مشکلی در ورود پیش آمده است. لطفا دوباره تلاش کنید!</p>}

                    <label className={classes.checkboxGroup}>
                        <input className={classes.checkbox} type="checkbox" name="check" value="1" />
                        <span className={classes.checkboxLabel}>مرا به خاطر بسپار</span>
                    </label>

                    <button 
                        type="submit" 
                        className={`${classes.btnPrimary} ${loading ? 'loading' : ''}`} 
                        disabled={loading}>
                        {loading ? 'ورود... ' : 'ورود'}
                    </button>
                </form>
            </div>
        </div>
    );
}


export default SigninForm;