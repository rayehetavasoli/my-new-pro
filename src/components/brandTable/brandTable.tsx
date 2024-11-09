import { FC } from 'react';
import BaseActionButtons from '../base/BaseActionButtons';
import { BrandTableProps } from '@/types/main';
import styles from './style/brandTable.module.scss';  // Import the SCSS file

const Table: FC<BrandTableProps> = ({ data, onEdit, onDelete }) => (
  <div className={styles['table-container']}>
    <table className={styles.table} dir="rtl">
      <thead>
        <tr>
          {['نام', 'سال تاسیس', 'کشور', 'صنعت', 'عملیات'].map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.brandName}</td>
              <td>{brand.founded}</td>
              <td>{brand.country}</td>
              <td>{brand.industry}</td>
              <td className={styles['actions-cell']}>
                <BaseActionButtons 
                  onEdit={() => onEdit(brand)} 
                  onDelete={() => onDelete(brand)} 
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

export { Table };
