import React from 'react';
import Header from "../../components/HeaderStart/Header";
import styles from "./Main.module.css"

const Main = ({children}) => {
    return (
        <div>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Main;