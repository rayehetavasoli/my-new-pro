import React, { useState } from 'react';
import { AddCircle, Notepad, SearchNormal1 } from 'iconsax-react';
import {AddBrand} from './addBrand';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import { HeaderSectionPropsB , Brand} from '@/types/main'
import styles from './style/headerSection.module.scss'



const HeaderSection: React.FC<HeaderSectionPropsB> = ({ onAddBrand, onSearch }) => {
  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false);
  const defaultBrand: Brand = { id: Number(uuidv4()), brandName: '', founded: '', country: '', industry: ''};

  const handleAddBrand = (brand: Brand) => {
    onAddBrand(brand);
    setIsAddBrandOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  
    return (
      <>
        <header className="flex justify-between items-center mb-3 px-4" dir="rtl">
          <div className="p-2 flex items-center gap-2">
            <Notepad className="w-6 h-6" />
            <h1 className="text-2xl font-semibold">برند</h1>
          </div>
  
          <div className="flex items-center gap-3">
            {/* Search Bar with SCSS styles applied */}
            <div className={styles['search-container']}>
              <button>
                <SearchNormal1 className={styles['search-icon']} />
              </button>
              <input
                className={styles['search-input']}
                type="search"
                placeholder="برند مورد نظر را جستجو کنید"
                onChange={handleSearch}
              />
            </div>
  
            {/* Add Brand button */}
            <button onClick={() => setIsAddBrandOpen(true)}>
              <AddCircle className="w-8 h-8 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
        </header>
  
        {/* Add Brand modal */}
        {isAddBrandOpen && (
          <AddBrand
            brand={defaultBrand}
            onClose={() => setIsAddBrandOpen(false)}
            onAdd={handleAddBrand}
          />
        )}
      </>
    );
};

export default HeaderSection;
