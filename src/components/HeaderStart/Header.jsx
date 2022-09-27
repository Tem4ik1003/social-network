import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import Button from "../UI/Button/Button";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <Button className={styles.button} onClick={() => navigate('/auth')}>Авторизація</Button>
                    <Button className={styles.button} onClick={() => navigate('/registration')}>Реєстрація</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;