import React from 'react';
import { Link } from 'react-router-dom';
import userSrc from '../images/user.svg';
export const Register: React.FC = () => {
  return (
    <div className='form-log'>
      <form className='form-signin'>
        <img className='mb-4' src={userSrc} alt='userSrc' width='72' height='72' />
        <h1 className='h3 mb-3 font-weight-normal'>Регистрация</h1>
        <label htmlFor='inputEmail' className='sr-only'>
          Email
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control  mb-3'
          placeholder='Email address'
          required
          autoFocus
          autoComplete='off'
        />
        <label htmlFor='inputPassword' className='sr-only'>
          Пароль
        </label>
        <input
          type='password'
          id='inputPassword'
          className='form-control  mb-3'
          placeholder='Пароль'
          required
          autoComplete='off'
        />
        <label htmlFor='inputPassword' className='sr-only'>
          Подтвердите пароль
        </label>
        <input
          type='password'
          id='inputPassword2'
          className='form-control  mb-3'
          placeholder='Подтвердите пароль'
          required
          autoComplete='off'
        />
        <Link to='/diary' className='btn btn-lg btn-primary btn-block' type='submit'>
          Зарегестрироваться
        </Link>
        <Link to='/' className='btn btn-lg btn-light btn-block' type='submit'>
          Назад
        </Link>
        <p className='mt-5 mb-3 text-muted'>© 2020</p>
      </form>
    </div>
  );
};
