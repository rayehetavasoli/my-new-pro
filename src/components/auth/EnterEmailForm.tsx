"use client"
import React, { useState } from 'react';
import { validateEmail } from '@/utils/auth';
import { ArrowRight } from 'iconsax-react';
import classes from "./style/Auth.module.scss";

function EnterEmailForm() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: false, general: false });
    const [loading, setLoading] = useState(false);

    const emailChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setErrors((prev) => ({ ...prev, email: false, general: false }));
    };

    const enterEmailHandler = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const isValidEmail = validateEmail(email);

        setErrors({
            email: !isValidEmail,
            general: false,
        });

        if (isValidEmail) {
            try {
                localStorage.setItem('userEmail', email);
                alert('Email successfully sent! Please check your inbox.');
                window.location.href = '/auth/check-email';
            } catch (error) {
                setErrors((prev) => ({ ...prev, general: true }));
            }
        }

        setLoading(false);
    };

    return (
        <div className={classes.authPage}>
            <div className={classes.card}>
                <form onSubmit={enterEmailHandler} className={classes.cardBody} id="reset_password_enter_email_form">
                    <div className={classes.cardBody__title}>
                        <h3>ایمیل</h3>
                        <span>ایمیل خود را برای تغییر رمز عبور وارد کنید</span>
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="email" className={classes.formLabel}>ایمیل</label>
                        <div className={classes.input}>
                            <input
                                id="email"
                                placeholder="email@email.com"
                                type="email"
                                value={email}
                                onChange={emailChangeHandler}
                                required
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                        </div>
                        {errors.email && <p className={classes.errorText}>ایمیل وارد شده معتبر نمی باشد!</p>}
                    </div>

                    {errors.general && <p className={classes.generalError}>یک مشکل در ارسال ایمیل پیش آمده است. لطفاً دوباره تلاش کنید!</p>}

                    <button
                        type="submit"
                        className={`${classes.btn} ${classes["btn--primary"]} ${loading ? classes.loading : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'درحال ارسال...' : 'ادامه'}
                        <ArrowRight size="16" color="#fff" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EnterEmailForm;
