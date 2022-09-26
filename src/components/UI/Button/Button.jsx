import React from 'react';
import styles from './Button.module.css'
const Button = ({children, className, type, disabled, onClick}) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={[styles.button , className].join(' ')}>
            {children}
        </button>
    );
};

export default Button;