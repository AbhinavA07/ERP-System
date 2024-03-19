// Orders.js
import React from 'react';
import styles from './Orders.module.css';

const Orders = () => {
    // Mock orders data for demonstration
    const orders = [
        { id: 1, customerName: 'John Doe', orderDate: '2024-03-16', status: 'Pending' },
        { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-15', status: 'Delivered' },
        { id: 3, customerName: 'Alice Johnson', orderDate: '2024-03-14', status: 'Shipped' }
    ];

    return (
        <div className={styles['orders-container']}>
            <h2>Orders Management</h2>
            <table className={styles['orders-table']}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
