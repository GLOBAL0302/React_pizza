import React from 'react';
import styles from "./notFoundBlock.module.scss"

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Empty Carts</h1>
            <p>it seems you have not made any orders</p>
        </div>
    );
};

export default NotFoundBlock;