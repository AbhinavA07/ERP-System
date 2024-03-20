import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBox, faClipboardList, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <nav ref={navbarRef} className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
            <div className={styles.hamburger} onClick={toggleNavbar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} style={{ color: isOpen ? '#fff' : '#000' }} />
            </div>
            {isOpen && (
                <div className={styles.content}>
                    <ul>
                        <li><Link to="/">
                                <span className={styles.linkText}>Home</span>
                                <FontAwesomeIcon icon={faUsers} style={{"margin-left": "7px"}}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <span className={styles.linkText}> Products</span>
                                <FontAwesomeIcon icon={faBox} style={{"margin-left": "7px"}} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders">
                                <span className={styles.linkText}>Orders</span>
                                <FontAwesomeIcon icon={faClipboardList} style={{"margin-left": "7px"}}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;