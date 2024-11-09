import { FC } from 'react';
import BaseActionButtons from '../base/BaseActionButtons';
import { users } from '@/db/main';
import { UserTableProps } from '@/types/main';
import styles from './style/table.module.scss'; 

const Table: FC<UserTableProps> = ({ data, onEdit, onDelete }) => (
  <div className={styles['table-container']}>
    <table className={styles.table} dir="rtl">
      <thead>
        <tr>
          {['نام', 'نام خانوادگی', 'ایمیل', 'تاریخ ثبت', 'عملیات'].map((header, index) => (
            <th key={index} className="p-3 text-center">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((user) => (
            <tr key={user.id} className="odd:bg-gray-50 even:bg-white">
              <td className="p-3 text-center">{user.firstName}</td>
              <td className="p-3 text-center">{user.lastName}</td>
              <td className="p-3 text-center">{user.email}</td>
              <td className="p-3 text-center">{user.date.toLocaleDateString('fa-IR')}</td>
              <td className={styles['actions-cell']}>
                <BaseActionButtons
                  onEdit={() => onEdit(user)}
                  onDelete={() => onDelete(user)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className={styles['no-data']}>
              هیچ داده‌ای موجود نیست
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export { Table, users };
