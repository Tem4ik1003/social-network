import React from 'react';

const CheckBox = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0 10px',
            fontSize: '14px',
        }}>
            <input type="checkbox" style={{
                width: '30px',
                height: '30px'
            }}/>
            <label>Запам'ятати мене</label>
        </div>
    );
};

export default CheckBox;