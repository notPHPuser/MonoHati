import { Link } from 'react-router-dom';
import './Register.css';
import { User } from '../../interfaces/infterface';

function Register() {
  const user: User = {
    name: 'Имя',
    email: 'Почта',
    password: 'Пароль',
  };
  return (
    <>
      <div className='registerPage'>
        <p className='enterRegPage'>Зарегистрироваться</p>
        <form className='formForRegPage'>
          <input className='regInputPage' type='text' placeholder={user.name} />
          <input className='regInputPage' type='email' placeholder={user.email} />
          <input className='regInputPage' type='password' placeholder={user.password} />
          <button className='submitRegPage' type='submit'>
            Зарегистрироваться
          </button>
          <Link className='linkMenuPage' to='/'>
            На главное меню
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
