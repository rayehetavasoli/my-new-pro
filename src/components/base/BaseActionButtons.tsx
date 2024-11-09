'use client';
import React from 'react';
import { Edit, Trash } from 'iconsax-react';
import { ActionButtonsProps } from '@/types/main';
import './style/BaseActionButtons.module.scss'


const BaseActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete }) => {
   return (
    <div className="base-action-buttons">
      <button
        className="edit-button"
        onClick={onEdit}
        aria-label="Edit"
      >
        <Edit />
      </button>
      <button
        className="delete-button"
        onClick={onDelete}
        aria-label="Delete"
      >
        <Trash />
      </button>
    </div>
  );
};

export default BaseActionButtons;
