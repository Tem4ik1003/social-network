import React from 'react';
import styles from './DropDown.module.css'
import CircleButton from "../UI/CircleButton/CircleButton";
import avatar from '../../assets/avatar.png'
const ItemMessage = () => {
    return (
        <div className={styles.message}>
            <div className={styles.message__data_photo}><img src={avatar} alt=""/></div>
            <div className={styles.message__data}>
                <div className={styles.message__data_userName}>Джигурда Джигурдинович</div>
                <div className={styles.message__data_text}>
                    Привет, как дела, я тут проверяю количество текста. которое помещается в сообщении. И хочу понять, сколько слов в ...
                </div>
            </div>
        </div>
    )
}

const DropDown = () => {
    return (
        <div className={styles.dropDown}>
            <div className={styles.dropDown__inner}>
                <div className={styles.dropDown__header}>
                    <div className={styles.text}><span>Повідомлення</span></div>
                    <div className={styles.close}><CircleButton>123</CircleButton></div>
                </div>
                <div className={styles.items}>
                    <ItemMessage/>
                    <ItemMessage/>
                    <ItemMessage/>
                    <ItemMessage/>
                    <ItemMessage/>
                    <ItemMessage/>
                    <ItemMessage/>
                    <ItemMessage/>
                </div>
            </div>
        </div>
    );
};

export default DropDown;