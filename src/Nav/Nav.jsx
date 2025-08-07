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
            <div className={styles.navLink}>
                <NavLink to='/' end className={({ isActive }) => isActive ? styles.ativo : ''} > <span className={styles.bolinha}></span> </NavLink>
                <NavLink to='/sobre' className={({ isActive }) => isActive ? styles.ativo : ''}> <span className={styles.bolinha}></span> </NavLink>
                <NavLink to='/habilidades' className={({ isActive }) => isActive ? styles.ativo : ''}> <span className={styles.bolinha}></span> </NavLink>
                <NavLink to='/projetos' className={({ isActive }) => isActive ? styles.ativo : ''}> <span className={styles.bolinha}></span> </NavLink>
                <NavLink to='/contato' className={({ isActive }) => isActive ? styles.ativo : ''}> <span className={styles.bolinha}></span> </NavLink>
            </div>

        </nav>
    )
}

export default Nav