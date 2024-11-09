import React from 'react';
import { DeleteBrandProps } from '@/types/main';
import { Warning2 } from 'iconsax-react';
import styles from './style/deleteBrand.module.scss'; 

const DeleteBrand: React.FC<DeleteBrandProps> = ({ brand, onCancel, onDelete }) => {
  return (
    <div className={styles['delete-brand-container']}>
      <div className={styles['delete-brand-modal']} dir='rtl'>
        <div className="flex flex-col justify-center items-center gap-4">
          <Warning2 className={styles['warning-icon']} />

          <h2 className={styles['modal-title']}>
            در صورت تائید برند {brand.brandName} به طور کامل از لیست برندها حذف می‌شود، آیا مطمئن هستید؟
          </h2>

          <div className={styles['modal-actions']}>
            <button 
              className={`${styles['modal-button']} ${styles['delete-button']}`} 
              onClick={onDelete}
            >
              تائید و حذف
            </button>
            <button 
              className={`${styles['modal-button']} ${styles['cancel-button']}`} 
              onClick={onCancel}
            >
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBrand;
