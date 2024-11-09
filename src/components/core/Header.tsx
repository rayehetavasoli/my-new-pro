import { Logout } from 'iconsax-react';
import React from 'react';
import Image from 'next/image';
import person from "../../assets/images/person.png";
import Link from 'next/link';
import Switcher from './themeMode';
import styles from './style/header.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link
        href="/auth/signin"
        className={styles.logoutButton}
      >
        <div className="flex justify-center items-center">
          <Logout
            color="currentColor"
            className={styles.logoutIcon}
          />
        </div>
        <div className={styles.logoutText}>خروج</div>
      </Link>

      <Image
        width={40}
        height={40}
        src={person}
        alt="user"
        className={styles.profileImage}
      />
      
      <Switcher />
    </div>
  );
}

export default Header;
