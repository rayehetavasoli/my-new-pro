import React from 'react';
import { DeleteUserProps } from '@/types/main';
import { Warning2 } from 'iconsax-react';
import styles from './style/deleteUser.module.scss';  

const DeleteUser: React.FC<DeleteUserProps> = ({ user, onCancel, onDelete }) => {
  return (
    <div className={styles['delete-user-container']}>
      <div className={styles['delete-user-modal']} dir='rtl'>
        <div className="flex flex-col justify-center items-center gap-8">
          <Warning2 className={styles['warning-icon']} />
          <h2 className={styles['modal-title']}>
            در صورت تائید کاربر {user.firstName} {user.lastName} به طور کامل از لیست کاربران حذف می‌شود، آیا مطمئن هستید؟
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

export default DeleteUser;
