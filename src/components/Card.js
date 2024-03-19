// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faClipboardList, faUsers, faExclamationCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';
import productImage from '../images/products.jpg';
import ordersImage from '../images/orders.webp';
import customersImage from '../images/customers.jpg';
import alertImage from '../images/alert.jpg';
import revenueImage from '../images/revenue.jpg';

const Card = ({ title, value }) => {
    const getIcon = (title) => {
        switch (title.toLowerCase()) {
            case 'products':
                return faBox;
            case 'orders':
                return faClipboardList;
            case 'customers':
                return faUsers;
            case 'alert':
                return faExclamationCircle;
            case 'revenue':
                return faChartLine;
            default:
                return null;
        }
    };

    const getBackgroundImage = (title) => {
        switch (title.toLowerCase()) {
            case 'products':
                return `url(${productImage})`;
            case 'orders':
                return `url(${ordersImage})`;
            case 'customers':
                return `url(${customersImage})`;
            case 'alert':
                return `url(${alertImage})`;
            case 'revenue':
                return `url(${revenueImage})`;
            default:
                return null;
        }
    };

    return (
        <div className={`${styles.card} ${styles.imageCard}`} style={{  backgroundImage: getBackgroundImage(title) }}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={getIcon(title)} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default Card;
