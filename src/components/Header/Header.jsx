import React from 'react';
import './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button.jsx';

const Header = () => {
  const userName = 'Antonio Chacon';

  return (
    <header className="header">
    <Logo />
    <div className="user-info">
      <h2 className="user-name">{userName}</h2>
    </div>
    <Button buttonText="Logout" />

  </header>
  );
};

export default Header;