import React from 'react';
import Header from "../../components/Header/Header";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./Main.module.css"

const Main = () => {
    return (
        <div>
            <Header/>
            <div className={styles.content}>
                <RegistrationForm/>
            </div>
        </div>
    );
};

export default Main;