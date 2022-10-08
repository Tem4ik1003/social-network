import React from 'react';
import styles from './PersonalPage.module.css'
import header from '../../assets/header_image.png'
import Header from "../../components/Header/Header";
import avatar from '../../assets/avatar.png'
const PersonalPage = () => {
    return (
        <>
            <Header/>
            <div className={styles.personal}>
                <div className={styles.personal__inner}>
                    <div className={styles.header}>
                        <img src={header} alt=""/>
                    </div>
                    <div className={styles.data}>
                        <img className={styles.avatar} src={avatar} alt=""/>
                        <div className={styles.data__user}>
                            <span>Артем Коваленко</span>
                            <span>Друзів: 500</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default PersonalPage;