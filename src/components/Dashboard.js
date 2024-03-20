import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import Navbar from './Navbar';
import Graph from './Graph';
import CalendarComponent from './Calendar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const closeModal = () => {
        setShowCalendar(false);
    };

    return (
        <div className={styles.dashboard}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles['calendar-icon']} onClick={toggleCalendar}>
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
                <h1>Dashboard</h1>
                <div className={styles['dashboard-summary']}>
                    <Card title="Revenue" value="$250K" />
                    <Card title="Products" value="50" />
                    <Card title="Orders" value="200" />
                    <Card title="Customers" value="100000" />
                    <Card title="Alert" value="20" />
                </div>
                <div className={`${styles['modal-overlay']} ${showCalendar ? styles.active : ''}`} onClick={closeModal}>
                    <div className={`${styles['modal']} ${showCalendar ? styles.active : ''}`}>
                        <CalendarComponent closeModal={closeModal} />
                    </div>
                </div>
                <div className={styles['dashboard-graph']}>
                    <Graph />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
