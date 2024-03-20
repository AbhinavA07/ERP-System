import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTrashAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Products.module.css';
import Navbar from './Navbar';

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', category: 'Category A', price: 20, stockQuantity: 100 },
        { id: 2, name: 'Product 2', category: 'Category B', price: 30, stockQuantity: 80 },
        { id: 3, name: 'Product 3', category: 'Category A', price: 25, stockQuantity: 120 }
    ]);

    const [newProductName, setNewProductName] = useState('');
    const [newProductCategory, setNewProductCategory] = useState('');
    const [newProductPrice, setNewProductPrice] = useState(0);
    const [newProductStockQuantity, setNewProductStockQuantity] = useState(0);

    const [editMode, setEditMode] = useState({});
    const [isPopupVisible, setPopupVisible] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const toggleEditMode = (productId) => {
        const isEditMode = editMode[productId];
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [productId]: !isEditMode
        }));
    };

    const saveProduct = (productId) => {
        const editedProduct = products.find(product => product.id === productId);
        const isDuplicateName = products.some(product => product.name === editedProduct.name && product.id !== editedProduct.id);
        if (isDuplicateName) {
            setErrorMessage('A product with the same name already exists.');
            setPopupVisible(true);
            return;
        }

        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [productId]: false
        }));
        setErrorMessage('');
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const addProduct = () => {
        if (!newProductName || !newProductCategory || !newProductPrice || !newProductStockQuantity) {
            setErrorMessage('Please enter values for all fields.');
            setPopupVisible(true);
            return;
        }

        const isDuplicateName = products.some(product => product.name === newProductName);
        if (isDuplicateName) {
            setErrorMessage('A product with the same name already exists.');
            setPopupVisible(true);
            return;
        }

        const newProductId = products.length + 1;
        const newProduct = {
            id: newProductId,
            name: newProductName,
            category: newProductCategory,
            price: newProductPrice,
            stockQuantity: newProductStockQuantity
        };

        setProducts([...products, newProduct]);

        setNewProductName('');
        setNewProductCategory('');
        setNewProductPrice(0);
        setNewProductStockQuantity(0);
        setErrorMessage('');
    };

    const closePopup = () => {
        setPopupVisible(false);
        setErrorMessage('');
    };

    const closePopupOnClick = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            closePopup();
        }
    };

    return (
        <div className={styles.dashboard}>
            <Navbar />
        <div className={styles['products-container']}>
            <h2>Products Management</h2>
            <table className={styles['products-table']}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>
                                {editMode[product.id] ? (
                                    <input
                                        type="text"
                                        value={product.name}
                                        onChange={(e) => setProducts(products.map(p => (p.id === product.id ? { ...p, name: e.target.value } : p)))}
                                    />
                                ) : (
                                    product.name
                                )}
                            </td>
                            <td>
                                {editMode[product.id] ? (
                                    <input
                                        type="text"
                                        value={product.category}
                                        onChange={(e) => setProducts(products.map(p => (p.id === product.id ? { ...p, category: e.target.value } : p)))}
                                    />
                                ) : (
                                    product.category
                                )}
                            </td>
                            <td>
                                {editMode[product.id] ? (
                                    <input
                                        type="number"
                                        value={product.price}
                                        onChange={(e) => setProducts(products.map(p => (p.id === product.id ? { ...p, price: e.target.value } : p)))}
                                    />
                                ) : (
                                    `$${product.price}`
                                )}
                            </td>
                            <td>
                                {editMode[product.id] ? (
                                    <input
                                        type="number"
                                        value={product.stockQuantity}
                                        onChange={(e) => setProducts(products.map(p => (p.id === product.id ? { ...p, stockQuantity: e.target.value } : p)))}
                                    />
                                ) : (
                                    product.stockQuantity
                                )}
                            </td>
                            <td>
                                {editMode[product.id] ? (
                                    <FontAwesomeIcon icon={faSave} onClick={() => saveProduct(product.id)} className={styles.actionIcon} />
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} onClick={() => toggleEditMode(product.id)} className={styles.actionIcon} />
                                )}
                                <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteProduct(product.id)} className={styles.actionIcon} />
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={newProductName}
                                onChange={(e) => setNewProductName(e.target.value)}
                                placeholder="Enter name"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={newProductCategory}
                                onChange={(e) => setNewProductCategory(e.target.value)}
                                placeholder="Enter category"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={newProductPrice}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === "0" || value === "") {
                                      setNewProductPrice(value);
                                      return;
                                    }
                                    const newValue = value.replace(/^0+/, "");
                                    if (!/^\d+(\.\d*)?$/.test(newValue)) {
                                      e.preventDefault();
                                      return;
                                    }
                                    setNewProductPrice(newValue);
                                }}
                                placeholder="Enter price"
                                inputMode='numeric'
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={newProductStockQuantity}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === "0" || value === "") {
                                      setNewProductStockQuantity(value);
                                      return;
                                    }
                                    const newValue = value.replace(/^0+/, "");
                                    if (!/^\d+(\.\d*)?$/.test(newValue)) {
                                      e.preventDefault();
                                      return;
                                    }
                                    setNewProductStockQuantity(newValue);
                                }}
                                placeholder="Enter stock quantity"
                                inputMode='numeric'
                            />
                        </td>
                        <td>
                            <FontAwesomeIcon icon={faPlus} onClick={addProduct} className={styles.actionIcon} />
                        </td>
                    </tr>
                </tbody>
            </table>
            {isPopupVisible && (
                <div className={styles.overlay} onClick={closePopupOnClick}>
                    <div className={styles.popup}>
                        <button className={styles.closeBtn} onClick={closePopup}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <h3>Message</h3>
                        {errorMessage && (
                            <div className={styles.error}>{errorMessage}</div>
                        )}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Products;
