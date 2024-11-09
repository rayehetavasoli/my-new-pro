import React, { FC } from 'react';
import Pagination from '../base/BasePagination';
import { FooterProps } from '@/types/main';
import styles from './style/footer.module.scss';  // Import the SCSS file

const Footer: FC<FooterProps> = ({ pageSize, onPageSizeChange, currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles['footer-container']}>
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={onPageChange} 
      />
      
      <div className={styles['page-size-selector']}>
        <span className={styles['page-size-label']}>در هر صفحه</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className={styles['select']}
        >
          {[5, 10, 15, 20].map((size) => (
            <option
              key={size}
              value={size}
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
