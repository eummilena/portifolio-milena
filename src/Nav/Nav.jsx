import React, { useEffect, useState } from 'react'
import styles from './Nav.module.css'
import { NavLink, useLocation } from 'react-router-dom';
import 'animate.css'
import Modal from '../components/Modal';


const Nav = () => {

    const [menuAberto, setMenuAberto] = useState(false);
    const location = useLocation();

    function handleClick() {
        setMenuAberto(!menuAberto);

    }

    useEffect(() => {
        setMenuAberto(false)
    }, [location])

    const navClass = location.pathname === '/' ? styles.nav : styles.navContent
    const bolinhaClass = location.pathname === '/' ? styles.bolinha : styles.bolinhaContent
    const ativo = location.pathname === '/' ? styles.ativo : styles.ativoContent

    return (

        <nav
            className={`${navClass} ${menuAberto ? styles.navActive : ''}`}
            id='nav'
            aria-label='Abrir Menu'
            aria-expanded={menuAberto}
        >

            <button
                aria-controls='menu'
                id='menu-button'
                className={styles.button}
                onClick={handleClick}
                aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuAberto}
            >
                <span className={styles.linha} aria-hidden='true'></span>
            </button>

            {menuAberto && <Modal ariaModal={menuAberto} />}
            <ul className={styles.navLink}>
                <li><NavLink to='/' end className={({ isActive }) => isActive ? `animate__animated animate__bounceIn ${ativo}` : ''} aria-label='Início'> <span className={bolinhaClass} aria-hidden='true'></span> </NavLink></li>
                <li><NavLink to='/sobre' className={({ isActive }) => isActive ? `animate__animated animate__bounceIn ${ativo}` : ''} aria-label='Sobre'> <span className={bolinhaClass} aria-hidden='true'></span> </NavLink></li>
                <li><NavLink to='/habilidades' className={({ isActive }) => isActive ? `animate__animated animate__bounceIn ${ativo}` : ''} aria-label='Habilidades'> <span className={bolinhaClass} aria-hidden='true'></span> </NavLink></li>
                <li><NavLink to='/projetos' className={({ isActive }) => isActive ? `animate__animated animate__bounceIn ${ativo}` : ''} aria-label='Projetos'> <span className={bolinhaClass} aria-hidden='true'></span> </NavLink></li>
                <li><NavLink to='/contato' className={({ isActive }) => isActive ? `animate__animated animate__bounceIn ${ativo}` : ''} aria-label='Contato'> <span className={bolinhaClass} aria-hidden='true'></span> </NavLink></li>
            </ul>

        </nav>
    )
}

export default Nav