import { Link } from 'react-router-dom';
import './Login.css';
import { User } from '../../interfaces/infterface';

function Login() {
  const user: User = {
    name: 'Имя',
    email: 'Почта',
    password: 'Пароль',
  };
  return (
    <>
      <div className='register'>
        <p className='enterReg'>Вход</p>
        <form className='formForReg'>
          <input className='regInput' type='text' placeholder={user.name} />
          <input className='regInput' type='text' placeholder={user.email} />
          <input className='regInput' type='text' placeholder={user.password} />
          <button className='submitReg' type='submit'>
            Зарегистрироваться
          </button>
          <Link className='linkMenu' to='/'>
            На главное меню
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
