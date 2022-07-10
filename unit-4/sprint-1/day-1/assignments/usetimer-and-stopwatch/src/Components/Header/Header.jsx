import React from 'react';
import styles from './Header.module.css';

export const Header = ({ title, active, handleClick }) => {

    const style = active? `${ styles.container } ${ styles.active }` : styles.container;
    
    return (
        <div className={ style } onClick={()=> handleClick(title)}>
            { title }
        </div>
    )
}