import React from 'react';
import { PaginationProps } from '@/types/main';
import styles from './style/BasePagination.module.scss';

const BasePagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];
    if (currentPage > 3) {
      pages.push("...");
    }

    if (currentPage > 1) {
      pages.push(currentPage - 1);
    }
    pages.push(currentPage);
    if (currentPage < totalPages) {
      pages.push(currentPage + 1);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }


    return pages;
  };

  return (
    <div className={styles.pagination}> {/* استفاده از کلاس pagination */}
      <button
        onClick={handlePrev}
        className={`${styles["page-button"]} ${currentPage === 1 ? styles["disabled"] : ""}`}
        disabled={currentPage === 1}
      >
        ❮
      </button>

      {renderPages().map((page, index) => (
        <span
          key={index}
          onClick={() => typeof page === 'number' && handlePageClick(page)}
          className={`${styles["page-number"]} ${
            currentPage === page ? styles["active"] : ""
          } ${page === "..." ? styles["ellipsis"] : ""}`}
        >
          {page}
        </span>
      ))}

      <button
        onClick={handleNext}
        className={`${styles["page-button"]} ${currentPage === totalPages ? styles["disabled"] : ""}`}
        disabled={currentPage === totalPages}
      >
        ❯
      </button>
    </div>
  );
};

export default BasePagination;
