import React from 'react';
import Header from "../../components/Header/Header";
import styles from './MyProfile.module.css'
import SideBar from "../../components/SideBar/SideBar";
import CircleButton from "../../components/UI/CircleButton/CircleButton";
import Button from "../../components/UI/Button/Button";
import Post from "../../components/Post/Post";

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
                            <div className={styles.formAddPost}>
                                <div>
                                    <textarea cols="30" rows="10"
                                              placeholder='Що у Вас нового? Напишіть повідомлення...'/>
                                    <div className={styles.buttons}>
                                        <div className={styles.buttons__add}>
                                            <CircleButton>
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                                     fillRule="evenodd" clipRule="evenodd">
                                                    <path
                                                        d="M16.983 2l1.406 2.109c.371.557.995.891 1.664.891h3.93v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8zm3.07 4c-1.006 0-1.938-.5-2.496-1.337l-1.109-1.663h-6.93l-1.109 1.664c-.557.836-1.49 1.336-2.496 1.336h-4.93v15h22v-15h-2.93zm-7.053 1c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm0 1c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-8-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm-3-6h3.001v1h-3.001v-1z"/>
                                                </svg>
                                            </CircleButton>
                                            <span>Фото/відео</span>
                                            <CircleButton>
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                                     fillRule="evenodd" clipRule="evenodd">
                                                    <path
                                                        d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/>
                                                </svg>
                                            </CircleButton>
                                            <span>Emoji</span>
                                        </div>
                                        <div className="button__send">
                                            <Button>Опублікувати</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Post/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;