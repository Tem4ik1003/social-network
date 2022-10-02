import React from 'react';
import Header from "../../components/Header/Header";
import styles from './MyProfile.module.css'
import SideBar from "../../components/SideBar/SideBar";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostsList from "../../components/PostsList/PostsList";

const MyProfile = () => {
    return (
        <>
            <Header/>
            <div className={styles.content}>
                <div className={styles.content__inner}>
                    <SideBar/>
                    <div className={styles.posts}>
                        <div className={styles.posts__inner}>
                            <div><h1>Моя сторінка</h1></div>
                            <AddPostForm/>
                        </div>
                        <PostsList/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;