// Calendar.js
import React, { useState } from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
    // Mock orders data for demonstration
    const [orders] = useState([
        { id: 1, orderDate: '2024-03-16', expectedDeliveryDate: '2024-03-20', customerName: 'John Doe' },
        { id: 2, orderDate: '2024-03-15', expectedDeliveryDate: '2024-03-19', customerName: 'Jane Smith' },
        { id: 3, orderDate: '2024-03-14', expectedDeliveryDate: '2024-03-18', customerName: 'Alice Johnson' }
    ]);

    // Function to format date to display in the calendar
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className={styles['calendar-container']}>
            <h2>Orders Calendar View</h2>
            <div>
                {orders.map(order => (
                    <div key={order.id} className={styles['calendar-item']}>
                        <div className={styles['date']}>{formatDate(order.expectedDeliveryDate)}</div>
                        <div className={styles['order-info']}>
                            <div>Order ID: {order.id}</div>
                            <div>Customer: {order.customerName}</div>
                            <div>Order Date: {order.orderDate}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
