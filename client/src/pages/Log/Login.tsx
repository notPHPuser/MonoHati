// import { Link } from 'react-router-dom';
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
          <input type='text' value={user.name} />
          <input type='text' value={user.email} />
          <input type='text' value={user.password} />
        </form>
      </div>
    </>
  );
}

export default Login;
