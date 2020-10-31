import React from 'react';
import { useForm } from '../hooks/useForm';
import { SectionWrInputs, SectionWrTextArea } from './SectionWr';
import { ButtonPrimary, Input } from './ui';

interface PageProps {
  date: string;
  sentence: string;
  author: string;
}
const d = 'day';
const m = 'month';
const y = 'year';

const grf1 = 'grf1';
const grf2 = 'grf2';
const grf3 = 'grf3';

const wm1 = 'wm1';
const wm2 = 'wm2';
const wm3 = 'wm3';

const afir = 'afir';

const ath = 'ath';

const bt = 'bt';

export const Page: React.FC<PageProps> = ({ date, sentence, author }) => {
  const { form, onChangeHandler } = useForm({
    [d]: { value: '' },
    [m]: { value: '' },
    [y]: { value: '' },

    [grf1]: { value: '' },
    [grf2]: { value: '' },
    [grf3]: { value: '' },

    [wm1]: { value: '' },
    [wm2]: { value: '' },
    [wm3]: { value: '' },

    [afir]: { value: '' },

    [ath]: { value: '' },

    [bt]: { value: '' },
  });

  const onSubmit = () => console.log(form, 'submit', date);

  return (
    <div className='pageWrapper'>
      <div className='d-flex align-items-end pageWrapper-date'>
        <span>Дата</span>
        <Input styleWrapper={{ marginBottom: 0 }} name={d} onChange={onChangeHandler} />
        <span>/</span>
        <Input styleWrapper={{ marginBottom: 0 }} name={m} onChange={onChangeHandler} />
        <span>/ 20</span>
        <Input styleWrapper={{ marginBottom: 0 }} name={y} onChange={onChangeHandler} />
      </div>
      <div className='text-center titlePage'>
        <h5 className='sentence'>{sentence}</h5>
        <h2 className='author'>{author}</h2>
      </div>

      <SectionWrInputs
        title='Lorem, ipsum dolor.'
        onChangeHandler={onChangeHandler}
        fields={[grf1, grf2, grf3]}
      />
      <SectionWrInputs
        title=' Lorem ipsum dolor sit amet.'
        onChangeHandler={onChangeHandler}
        fields={[wm1, wm2, wm3]}
      />

      <SectionWrTextArea
        title=' Lorem ipsum dolor sit amet.'
        onChangeHandler={onChangeHandler}
        fields={[afir]}
      />

      <SectionWrTextArea
        title=' Lorem ipsum dolor sit amet.'
        onChangeHandler={onChangeHandler}
        fields={[ath]}
      />

      <SectionWrTextArea
        title='Lorem, ipsum dolor sit amet consectetur'
        onChangeHandler={onChangeHandler}
        fields={[bt]}
      />

      <div className='mt-5 d-flex justify-content-center'>
        <ButtonPrimary onClick={onSubmit} title='Сохранить' />
      </div>
    </div>
  );
};
