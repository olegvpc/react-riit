import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {

  return (
    <header className={`header header_main"}`}>
        <Logo />
        <Navigation
        />
    </header>
  );
}

export default Header;
