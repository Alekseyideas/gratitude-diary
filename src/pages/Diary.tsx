import React from 'react';
import { Page } from '../components/Page';

export const Diary: React.FC = () => {
  return (
    <div className='diary-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Page
              date='28.10.2020'
              sentence='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus tenetur dolores eaque consequatur magni quos sit, sequi quod! Officia '
              author='Victor Fanclin'
            />
          </div>
          <div className='col-md-6'>
            <Page
              date='29.10.2020'
              sentence='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus tenetur dolores eaque consequatur magni quos sit, sequi quod! Officia'
              author='Victor Fanclin'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
