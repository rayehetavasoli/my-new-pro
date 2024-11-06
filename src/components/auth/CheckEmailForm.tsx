"use client";
import React from "react";
import Link from "next/link";
import classes from "./style/Auth.module.scss";

const CheckEmailForm: React.FC = () => {
  const email = typeof window !== "undefined" ? localStorage.getItem("userEmail") || "" : "";

  return (
    <div className={classes.authPage} dir="rtl">
      <div className={classes.card}>
        <div className={`${classes.cardBody} p-10`}>
          <h3 className={`${classes.cardBody__title} dark:text-gray-300`}>
            ایمیل خود را چک کنید
          </h3>
          <div className={`${classes.cardBody__text}`}>
            لطفا ایمیل خود را چک کنید &nbsp;
            <Link href="#" className={classes.cardBody__highlightLink}>
              {email}
            </Link>
            <br />
            تا رمز شما را بازیابی کنیم. باتشکر
          </div>
          <div className="flex justify-center m-5">
            <Link href="/auth/reset-password/" className={`${classes.btn} ${classes.btnPrimary}`}>
              رد کردن
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs text-gray-600">ایمیل را دریافت نکردید؟</span>
            <Link href="#" className={classes.link}>
              ارسال دوباره
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmailForm;
