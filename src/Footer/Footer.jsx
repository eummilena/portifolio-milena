import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {

    const date = new Date().getFullYear()


    return (
        <footer className={styles.footer}>
            <p>&copy; {date} Milena. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer