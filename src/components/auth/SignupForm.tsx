"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { validateEmail, validatePassword } from '@/utils/auth';
import { Eye, EyeSlash } from 'iconsax-react';
import classes from "./style/Auth.module.scss";
import {RepoFactory} from '@/BaseRepository/Factory';


function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: false, password: false, confirmPassword: false, general: false });
    const [loading, setLoading] = useState(false);

    const authRepository = RepoFactory.get("auth");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const emailChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, email: false, general: false }));
    };

    const passwordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, password: false, general: false }));
    };

    const confirmPasswordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, confirmPassword: false, general: false }));
    };

    const signupHandler = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        const passwordsMatch = password === confirmPassword;

        setErrors({
            email: !isValidEmail,
            password: !isValidPassword,
            confirmPassword: !passwordsMatch,
            general: false,
        });

        if (isValidEmail && isValidPassword && passwordsMatch) {
            try {
                await authRepository.Signup({ email, password }); 
                alert('Signup successful!');
                window.location.href = '/auth/signin';
            } catch (error) {
                console.error(error); 
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };

    return (
        <div className={classes.authPage} dir='rtl'>
            <div className={classes.card}>
                <form onSubmit={signupHandler} className={classes.cardBody}>
                    <div className="text-center mb-2.5">
                        <h3 className="text-xl font-semibold text-gray-900 leading-none mb-2.5 dark:text-gray-300">ثبت نام</h3>
                        <div className="flex items-center justify-center font-medium">
                            <span className="text-md text-gray-700 me-1.5">آیا حساب کاربری دارید؟</span>
                            <Link className={ classes.link + "text-md"} href="/auth/signin/">ورود</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={ classes.formLabel + "font-medium"}>ایمیل</label>
                        <input
                            className={classes.input}
                            placeholder="ایمیل را وارد کنید"
                            type="email"
                            value={email}
                            onChange={emailChangeHandler}
                            required
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                       
                    </div>
                    {errors.email && <p className={classes.errorText}>ایمیل وارد شده صحیح نمی باشد!</p>}

                    <div className="flex flex-col gap-1">
                        <label className={ classes.formLabel + "font-medium"}>رمز عبور</label>
                        <div className={classes.input}>
                           
                            <input
                                name="user_password"
                                placeholder="رمز عبور را وارد کنید"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={passwordChangeHandler}
                                required
                                aria-invalid={errors.password ? "true" : "false"}
                            />
                           <button type="button" onClick={togglePasswordVisibility} className={classes.btn + classes.btnIcon}>
                                {showPassword ? <Eye className="ki-filled ki-eye text-gray-500" size="18" /> : <EyeSlash className="ki-filled ki-eye-slash text-gray-500" size="18" />}
                            </button>
                            
                        </div>
                        {errors.password && <p className={classes.errorText}>رمز عبور وارد شده باید شامل حروف کوچک و بزرگ ، اعداد و کارکتر باشد!</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={ classes.formLabel + "font-medium"}>تکرار رمز عبور</label>
                        <div className={classes.input}>
                           
                            <input
                                name="confirm_password"
                                placeholder="مجددا رمز عبور را وارد کنید"
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={confirmPasswordChangeHandler}
                                required
                                aria-invalid={errors.confirmPassword ? "true" : "false"}
                            />
                              <button type="button" onClick={togglePasswordVisibility} className={classes.btn + classes.btnIcon}>
                                {showPassword ? <Eye className="ki-filled ki-eye text-gray-500" size="18" /> : <EyeSlash className="ki-filled ki-eye-slash text-gray-500" size="18" />}
                            </button>
                            
                        </div>
                        {errors.confirmPassword && <p className={classes.errorText}>رمز عبور های وارد شده باهم مطابقت ندارند!</p>}
                    </div>

                    {errors.general && <p className={classes.errorText}>در ثبت نام شما مشکلی پیش آمده است. لطفا دوباره تلاش کنید!</p>}

                    <label className={classes.checkboxGroup}>
                        <input className={classes.checkbox + "checkbox-sm"} name="check" type="checkbox" value="1" required/>
                        <span className="checkbox-label"><Link className={classes.link + "text-2sm"} href="#">شرایط و قوانین</Link> را می پذیرم.</span>
                    </label>

                    <button type="submit" className={`btn btn-primary flex justify-center grow ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'درحال ثبت نام ...' : 'ثبت نام'}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default SignupForm;
