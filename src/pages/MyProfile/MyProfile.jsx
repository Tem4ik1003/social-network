import React from 'react';
import Header from "../../components/Header/Header";
import styles from './MyProfile.module.css'
import SideBar from "../../components/SideBar/SideBar";
const MyProfile = () => {
    return (
        <>
            <Header/>
            <div className={styles.content}>
                <div className={styles.content__inner}>
                    <SideBar/>
                </div>
            </div>
        </>
    );
};

export default MyProfile;