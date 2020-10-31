import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button type='button' className='btn btn-primary' onClick={onClick}>
      {title}
    </button>
  );
};
