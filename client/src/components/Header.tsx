import './Header.css';
import { Link } from 'react-router-dom';

interface header {
  login: string;
}

function Header({ login = 'login' }: header) {
  return (
    <>
      <div className='header'>
        <div className='right_header'>
          <Link to='/login' className='login'>
            {login}
          </Link>
        </div>
      </div>
      <p>sperm123123123a</p>
    </>
  );
}

export default Header;
