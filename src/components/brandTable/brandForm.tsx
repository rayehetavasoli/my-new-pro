import React, { useState, useEffect } from "react";
import { CloseCircle, AddCircle, Edit2 } from "iconsax-react";
import { BrandFormProps, Brand } from '@/types/main';
import styles from './style/brandForm.module.scss';

const BrandForm: React.FC<BrandFormProps> = ({ brand, onClose, onSave, mode }) => {
  const [formData, setFormData] = useState<Brand>({
    id: brand?.id || 0,
    brandName: brand?.brandName || '',
    founded: brand?.founded || '',
    country: brand?.country || '',
    industry: brand?.industry || '',
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setFormData({
      id: brand?.id || 0,
      brandName: brand?.brandName || '',
      founded: brand?.founded || '',
      country: brand?.country || '',
      industry: brand?.industry || '',
    });
  }, [brand]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { brandName, founded, country, industry } = formData;
    if (!brandName || !founded || !country || !industry) {
      setError("تمامی فیلدها الزامی است");
      return;
    }
    onSave(formData); 
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${styles.formContainer}`} dir="rtl">
      <div className={styles.formContainer}>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 flex items-center justify-between">
          <CloseCircle className="w-6 h-6" />
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className="flex-col justify-center items-start gap-5 inline-flex">
          <div className="self-stretch px-2 justify-start items-center gap-1 inline-flex">
            {mode === 'add' ? <AddCircle className="w-5 h-5 text-gray-900" /> : <Edit2 className="w-5 h-5 text-gray-900" />}
            <div className="text-lg font-semibold">{mode === 'add' ? 'افزودن برند جدید' : 'ویرایش اطلاعات برند'}</div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-row gap-4 justify-center items-center">
            <div className="flex-col items-end gap-7 inline-flex">
              <label className={styles.inputLabel}>نام</label>
              <label className={styles.inputLabel}>سال تاسیس</label>
              <label className={styles.inputLabel}>کشور</label>
              <label className={styles.inputLabel}>صنعت</label>
            </div>

            <div className="flex-col gap-7 inline-flex">
              {['brandName', 'founded', 'country', 'industry'].map((field, index) => (
                <div key={index} className="w-full px-3 py-2">
                  <input
                    type="text"
                    name={field}
                    placeholder={`${
                      field === 'brandName' ? 'نام برند' : 
                      field === 'founded' ? 'سال تاسیس' : 
                      field === 'country' ? 'کشور سازنده' : 
                      'نوع صنعت'
                    }`}
                    value={formData[field as keyof Brand]}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                </div>
              ))}
            </div>
          </form>

          <button
            type="button"
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            {mode === 'add' ? 'تائید و اضافه' : 'بروزرسانی'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandForm;
