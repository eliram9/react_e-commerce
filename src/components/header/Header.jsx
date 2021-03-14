import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/grail.png'
import './Header.scss';

const Header = () => {
    return (  
        <div>
            <nav className="header">
                <div className="container">
                    <Link className="logo_container" to="/">
                        <img src={Logo} 
                            alt="website_logo" 
                            width="26" 
                            height="26" 
                            className="d-inline-block align-top" 
                            style={{ filter: 'grayscale(.7)', marginRight: '10px' }} 
                        />
                            HOLY GRAIL
                    </Link>
                </div>
                <div className="options">
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/contact">CONTACT</Link>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;