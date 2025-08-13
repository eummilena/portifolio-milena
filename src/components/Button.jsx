import React, { Children } from 'react'
import styles from './Button.module.css'

const Button = ({ children, onClick, ariaLabel, href, download }) => {
    if (href) {
        return (
            <a className={styles.button}
                href={href}
                download={download}
                aria-label={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        )
    }
    return (
        <button className={styles.button} type='button' aria-label={ariaLabel} onClick={onClick}>{children}</button>
    )

}

export default Button