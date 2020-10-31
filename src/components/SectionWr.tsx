import React from 'react';
import { InputWithNumber, TextArea } from './ui';

interface SectionWrInputsProps {
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  title: string;
  fields: string[];
}

export const SectionWrInputs: React.FC<SectionWrInputsProps> = ({
  fields,
  onChangeHandler,
  title,
}) => {
  return (
    <div className='sectionWr'>
      <h4 className='sectionWr-title'>{title}</h4>
      <form>
        {fields.map((inm, i) => (
          <InputWithNumber key={inm} num={i + 1} name={inm} onChange={onChangeHandler} />
        ))}
      </form>
    </div>
  );
};
export const SectionWrTextArea: React.FC<SectionWrInputsProps> = ({
  fields,
  onChangeHandler,
  title,
}) => {
  return (
    <div className='sectionWr'>
      <h4 className='sectionWr-title'>{title}</h4>
      <form>
        {fields.map((inm, i) => (
          <TextArea key={inm} name={inm} onChange={onChangeHandler} />
        ))}
      </form>
    </div>
  );
};
