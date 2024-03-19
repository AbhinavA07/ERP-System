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
                                <FontAwesomeIcon icon={faUsers} />
                                <span className={styles.linkText}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon icon={faBox} />
                                <span className={styles.linkText}>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders">
                                <FontAwesomeIcon icon={faClipboardList} />
                                <span className={styles.linkText}>Orders</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;