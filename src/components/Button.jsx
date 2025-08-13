import React, { Children } from 'react'
import styles from './Button.module.css'

const Button = ({ children, onClick, ariaLabel }) => {
    return (
        <button className={styles.button} type='button' aria-label={ariaLabel} onClick={onClick}>{children}</button>
    )
}

export default Button