import React from 'react';

interface InputProps {
  name: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  styleWrapper?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({ name, onChange, style, styleWrapper }) => {
  return (
    <div className='form-group' style={styleWrapper}>
      <input
        style={style}
        type='text'
        className='form-control'
        id={name}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

interface InputWithNumberProps extends InputProps {
  num: number;
}

export const InputWithNumber: React.FC<InputWithNumberProps> = ({ num, name, onChange }) => {
  return (
    <div className='form-group d-flex align-items-end'>
      <span className='d-block mr-2'>{num}.</span>
      <input type='text' className='form-control' id={name} name={name} onChange={onChange} />
    </div>
  );
};

interface TextAreaProps extends InputProps {}

export const TextArea: React.FC<TextAreaProps> = ({ name, onChange }) => {
  return (
    <div className='form-group'>
      <textarea className='form-control' id={name} name={name} rows={3} />
    </div>
  );
};
