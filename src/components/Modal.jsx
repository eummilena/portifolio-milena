import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Modal.module.css'

const Modal = ({ ariaModal }) => {


    return (
        <nav aria-modal={ariaModal} id='menu-modal' role='dialog' className={styles.modal}>
            <NavLink to='/' className={`${styles.list}`}>Início</NavLink>
            <NavLink to='/sobre' className={`${styles.list}`}>Sobre</NavLink>
            <NavLink to='/habilidades' className={`${styles.list}`}>Habilidades</NavLink>
            <NavLink to='/projetos' className={`${styles.list}`}>Projetos</NavLink>
            <NavLink to='/contato' className={`${styles.list}`}>Contato</NavLink>
        </nav>
    )
}

export default Modal