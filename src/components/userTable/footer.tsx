import React, { FC } from 'react';
import Pagination from '../base/BasePagination';
import { FooterProps } from '@/types/main';
import styles from './style/footer.module.scss'; // وارد کردن استایل‌های SCSS

const Footer: FC<FooterProps> = ({ pageSize, onPageSizeChange, currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['pagination-container']}>
        <Pagination 
          totalPages={totalPages} 
          currentPage={currentPage} 
          onPageChange={onPageChange} 
        />
      </div>
      
      <div className={styles['page-size-selector']}>
        <span className={styles['page-size-label']}>در هر صفحه</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className={styles.select}
        >
          {[5, 10, 15, 20].map((size) => (
            <option
              key={size}
              value={size}
              className={styles['select-option']}
            >
              {size}
            </option>
          ))}
        </select>
        <span className={styles['select-label']}>نمایش</span>
      </div>
    </div>
  );
};

export default Footer;
