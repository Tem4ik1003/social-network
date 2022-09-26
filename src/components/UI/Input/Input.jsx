import React from 'react';
import {Field} from "formik";

const Input = ({className, name, type}) => {
    return (
            <Field className={className} name={name} type={type} style={{
                fontSize: '16px',
                padding: '8px 15px',
                border: '1px solid gray',
                borderRadius: '5px',
            }}/>
    );
};

export default Input;