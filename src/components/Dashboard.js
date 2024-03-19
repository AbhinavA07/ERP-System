// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <div className={styles['dashboard-summary']}>
                <p>Total Products: 50</p>
                <p>Total Orders: 20</p>
            </div>
            <div className={styles['dashboard-links']}>
                <Link to="/products">Products Management</Link>
                <Link to="/orders">Orders Management</Link>
            </div>
        </div>
    );
};

export default Dashboard;
