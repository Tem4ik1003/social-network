import React from 'react';
import {Form, Formik} from "formik";
import Button from "../../UI/Button/Button";
import Field from "../../UI/Field/Field";
import styles from "./AuthForm.module.css";
import CheckBox from "../../UI/CheckBox/CheckBox";
import Error from "../../UI/Error/Error";

const AuthForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={values => {
                const errors = {}
                if(values.email.length === 0) errors.email = 'Пуста строка'
                if(values.password.length === 0) errors.password = 'Пуста строка'
                return errors
            }}
            onSubmit={(values, {setSubmitting}) => {
                // same shape as initial values
                alert('bingo')
                setSubmitting(false);
            }}
        >{({errors, touched, isSubmitting}) => (
            <Form>
                <div className={styles.form}>
                    <div className={styles.form__inner}>
                        <div className={styles.header_text}>
                            <h2>Авторизація</h2>
                        </div>
                        <div className={styles.field}>
                            <span>Адреса ел.пошти</span>
                            <Field name='email' type='email'/>
                            {touched.email && errors.email && <Error errorText={errors.email}/>}
                        </div>
                        <div className={styles.field}>
                            <span>Пароль</span>
                            <Field name='password' type='password'/>
                            {touched.password && errors.password && <Error errorText={errors.password}/>}
                        </div>
                        <div className={styles.field}>
                            <CheckBox/>
                        </div>
                        <div className={styles.button_submit}>
                            <Button disabled={isSubmitting} type='submit'>Авторизація</Button>
                        </div>
                    </div>
                </div>
            </Form>
        )}
        </Formik>
    );
};

export default AuthForm;