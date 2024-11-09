import React from 'react';
import { Element3, InfoCircle, Notepad, UserEdit } from 'iconsax-react';
import Image from 'next/image';
import Vector from "../../assets/images/Vector.png";
import Link from 'next/link';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={`${styles.sidebarContainer} dark`}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <Image width="95" height="13" src={Vector} alt="logo" className="logo-image" />
      </div>

      {/* Menu Items */}
      <div className={styles.menuItems}>
        {/* Dashboard */}
        <div className={styles.menuItem}>
          <Element3 className={`${styles.icon}`} color="currentColor" />
          <Link href="/dashboard">
            <div className={styles.text}>داشبورد</div>
          </Link>
        </div>

        {/* Info */}
        <div className={styles.inactiveItem}>
          <InfoCircle className={`${styles.icon}`} color="currentColor" />
          <div className={styles.text}>اطلاعات پایه</div>
        </div>

        {/* Users */}
        <div className={styles.menuItem}>
          <UserEdit className={`${styles.icon}`} color="currentColor" />
          <Link href="/users">
            <div className={styles.text}>کاربر</div>
          </Link>
        </div>

        {/* Brands */}
        <div className={styles.menuItem}>
          <Notepad className={`${styles.icon}`} color="currentColor" />
          <Link href="/brands">
            <div className={styles.text}>برند</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
