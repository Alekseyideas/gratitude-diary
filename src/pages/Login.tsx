import React from 'react';
import { Link } from 'react-router-dom';
import userSrc from '../images/user.svg';
export const Login: React.FC = () => {
  return (
    <div className='form-log'>
      <form className='form-signin'>
        <img className='mb-4' src={userSrc} alt='userSrc' width='72' height='72' />
        <h1 className='h3 mb-3 font-weight-normal'>Введите ваши данные</h1>
        <label htmlFor='inputEmail' className='sr-only'>
          Email
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control mb-3'
          placeholder='Email'
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
        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Запомнить меня
          </label>
        </div>
        <Link to='/diary' className='btn btn-lg btn-primary btn-block' type='submit'>
          Войти
        </Link>
        <Link to='/register' className='btn btn-lg btn-light btn-block' type='submit'>
          Зарегестрироваться
        </Link>
        <p className='mt-5 mb-3 text-muted'>© 2020</p>
      </form>
    </div>
  );
};
