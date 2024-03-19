// Products.js
import React, { useState } from 'react';
import styles from './Products.module.css';

const Products = () => {
    // Mock products data for demonstration
    const [products] = useState([
        { id: 1, name: 'Product 1', category: 'Category A', price: 20, stockQuantity: 100 },
        { id: 2, name: 'Product 2', category: 'Category B', price: 30, stockQuantity: 80 },
        { id: 3, name: 'Product 3', category: 'Category A', price: 25, stockQuantity: 120 }
    ]);

    return (
        <div className={styles['products-container']}>
            <h2>Products Management</h2>
            <table className={styles['products-table']}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>{product.stockQuantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
