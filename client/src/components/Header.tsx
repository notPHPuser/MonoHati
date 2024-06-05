import './Header.css';
import { Link } from 'react-router-dom';
import logotip from '../assets/MH.png'; 
import hat from '../assets/heart.png';

interface header {
  login: string;

}

function Header({ login = 'login' }: header) {
  return (
    <>
      <div className='header'>
        <img src= {logotip} className='logo' />
        <a className='name'><img src="https://x-lines.ru/letters/i/cyrillicbasic/0004/322a7e/20/0/jizsh5a.png"  /></a>
        <a className='name1'><img src="https://x-lines.ru/letters/i/cyrillicbasic/0004/0083c0/20/0/jboze4e.png" /></a> 
        <div className='right_header'>
        <div className='rectangle'>
          <Link to='/login' className='login'>
            {login}
          </Link>
          </div>
            <p className='katalog'>Каталог</p>
            <img src={hat} className='liked' />
        </div>
        
      </div>
    </>
  );
}

export default Header;
