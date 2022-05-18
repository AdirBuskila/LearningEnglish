import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const AppHeader = () => {
  return (
    <div className='app-header flex justify-center'>
      <Link to='/home'>
        <img src={logo} alt='app-logo' />
      </Link>
    </div>
  );
};
