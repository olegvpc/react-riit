import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/riit_178.png';

function Logo() {

  return (
    <Link to='/' className='logo'>
      <img className='logo_pic' src={logo} alt='Логотип приложения Riit' />
    </Link>
  );
}

export default Logo;