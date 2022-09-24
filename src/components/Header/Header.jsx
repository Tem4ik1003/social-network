import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import Button from "../UI/Button/Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <Button className={styles.button}>Авторизація</Button>
                    <Button className={styles.button}>Реєстрація</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;