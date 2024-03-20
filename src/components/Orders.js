import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Orders.module.css';
import noOrdersImage from '../images/no-order-512.png';
import Navbar from './Navbar';

const Orders = () => {
    const [orders, setOrders] = useState([
        { id: 1, customerName: 'John Doe', orderDate: '2024-03-16', status: 'Pending' },
        { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-15', status: 'Delivered' },
        { id: 3, customerName: 'Alice Johnson', orderDate: '2024-03-14', status: 'Shipped' }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const updateStatus = (orderId, newStatus) => {
        setOrders(orders.map(order => (order.id === orderId ? { ...order, status: newStatus } : order)));
    };

    const deleteOrder = (orderId) => {
        setOrders(orders.filter(order => order.id !== orderId));
    };

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    return (
        <div className={styles.dashboard}>
            <Navbar />
        <div className={styles['orders-container']}>
            <h2>Orders Management</h2>
            {orders.length === 0 ? (
                <div className={styles.noOrdersContainer}>
                    <div className={styles.noOrdersContent}>
                        <img src={noOrdersImage} alt="No orders" />
                        <p>No orders</p>
                    </div>
                </div>
            ) : (
                <table className={styles['orders-table']}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.status}</td>
                                <td>
                                    <div className={styles.actionColumn}>
                                    <button className={styles.actionBtn} onClick={() => handleViewDetails(order)}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <select
                                        className={`${styles.selectStatus} ${styles[order.status.toLowerCase()]}`}
                                        style={{
                                            "fontSize": "13px",
                                            "font-family": "var(--font-family)",
                                            "fontWeight":"inherit",
                                          }}
                                        value={order.status}
                                        onChange={(e) => updateStatus(order.id, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                    <button className={styles.actionBtn} onClick={() => deleteOrder(order.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {showModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={handleCloseModal}>
                            &times;
                        </button>
                        <h2>Order Details</h2>
                        {selectedOrder && (
                            <div>
                                <p>Order ID: {selectedOrder.id}</p>
                                <p>Customer Name: {selectedOrder.customerName}</p>
                                <p>Order Date: {selectedOrder.orderDate}</p>
                                <p>Status: {selectedOrder.status}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Orders;
