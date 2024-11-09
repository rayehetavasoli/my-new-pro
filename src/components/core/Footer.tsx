import React from 'react';
import Link from 'next/link';
import styles from './style/footer.module.scss';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <Link href="/about-us" className={styles.footerLink}>
          درباره ما
        </Link>
        <Link href="/support" className={styles.footerLink}>
          پشتیبانی
        </Link>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/dashboard" className={styles.footerLink}>
          داشبورد
        </Link>
        <Link href="/users" className={styles.footerLink}>
          کاربر
        </Link>
      </div>
    </div>
  );
}

export default Footer;
