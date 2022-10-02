import React from 'react';
import button from "../Button/Button";

const CircleButton = ({children, className}) => {
    return (
        <button className={className} style={{
            backgroundColor: '#6e9741',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '5px',
            display: 'flex',
            alignItems: 'center'
        }}>
            {children}
        </button>
    );
};

export default CircleButton;