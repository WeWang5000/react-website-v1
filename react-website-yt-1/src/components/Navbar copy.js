import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from "react-router-dom";
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false); //create click button for navbar
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); //create click button for navbar
    const closeMobileMenu = () => setClick(false); // write function for home button

    const showButton = () => { 
        // auto the website scale, start from 960
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        };
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="Navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL 
                        <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    {/* //&& is shortcut for return */}
                </div>
            </nav>
        </>
    );
}


export default Navbar;