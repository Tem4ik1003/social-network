import React from 'react';
import styles from './RegistrationForm.module.css'
import Button from "../../UI/Button/Button";
import Field from "../../UI/Field/Field";
import {Form, Formik} from "formik";
import Error from "../../UI/Error/Error";



const RegistrationForm = () => {
    return (
        <Formik
            initialValues={{
                userName: '',
                phoneNumber: '',
                email: '',
                password: '',
                repeatPassword: ''
            }}
            validate={values => {
                const errors = {};
                if(values.userName.length === 0) errors.userName = 'Пуста строка'
                if(values.phoneNumber.length === 0) errors.phoneNumber = 'Пуста строка'
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
                            <h2>Реєстрація</h2>
                            <h4>Через соціальні мережі</h4>
                        </div>
                        <div className={styles.buttons_alternative_registration}>
                            <button>Google</button>
                            <button>Facebook</button>
                            <h4>або</h4>
                        </div>
                        <div className={styles.field}>
                            <span>Прізвище та ім’я</span>
                            <Field name='userName'/>
                            {touched.userName && errors.userName && <Error errorText={errors.userName}/>}
                        </div>
                        <div className={styles.field}>
                            <span>Номер телефону</span>
                            <Field name='phoneNumber'/>
                            {touched.phoneNumber && errors.phoneNumber && <Error errorText={errors.phoneNumber}/>}
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
                            <span>Повторіть пароль</span>
                            <Field name='repeatPassword' type='password'/>
                        </div>
                        <div className={styles.note}>
                            <span>Якщо ваша ел. адрес вже була зареєстрована, будь ласка виберіть “Авторизація”, так як повторна реєстрація неможлива</span>
                        </div>
                        <div className={styles.button_submit}>
                            <Button disabled={isSubmitting} type='submit'>Реєстрація</Button>
                        </div>
                    </div>
                </div>
            </Form>
        )}
        </Formik>

    );
};

export default RegistrationForm;