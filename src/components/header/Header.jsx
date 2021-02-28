import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/grail.svg'
import './Header.scss';

const Header = () => {
    return (  
        // <div className='header'>
        //     <Link className="logo_container" to="/">
        //         <Logo className="logo" />
        //     </Link>
        //     <div className="options">
        //         <Link className="option" to="/shop">SHOP</Link>
        //         <Link className="option" to="/contact">CONTACT</Link>
        //     </div>
        // </div>
        <div>
            <nav className="header">
                <div className="container">
                    <Link className="logo_container" to="/">
                        <img src={Logo} alt="logo-image" width="60" style={{ filter: 'grayscale(.8)', marginRight: '10px' }} /> 
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