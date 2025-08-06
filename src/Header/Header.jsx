import React from 'react'
import Logo from '../Assets/Milena.svg'
import styles from './Header.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo escrito Milena" className={styles.logo} />
        </header>
    )
}

export default Header