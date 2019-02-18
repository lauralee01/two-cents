import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Header = () => (
    <div className="header">
        <Link to = "/" className="Header__brand">
            <img src={Logo} alt="Logo" className="Header__logo" />
        </Link>
    </div>
)

export default Header;