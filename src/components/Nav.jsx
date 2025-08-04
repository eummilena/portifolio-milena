import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav} id='menu'>
            <button aria-controls='menu' aria-expanded='false' aria-label='Abrir Menu' className={styles.button}>
                <span aria-hidden='true' className={styles.linha}> </span>
            </button>
        </nav>
    )
}

export default Nav