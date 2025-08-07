import React, { useState } from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';


const Nav = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    function handleClick() {
        setMenuAberto(!menuAberto);
    }

    return (
        <nav className={`${styles.nav} ${menuAberto ? styles.navActive : ''}`} id='nav' aria-label='Abrir Menu' aria-expanded={menuAberto} >
            <button aria-controls='menu' id='menu-button' className={styles.button} onClick={() => { handleClick() }} >
                Abrir menu <span className={styles.linha}></span>
            </button>
            <NavLink to='/' end >Home</NavLink>
            <NavLink to='/sobre'>Sobre</NavLink>
        </nav>
    )
}

export default Nav