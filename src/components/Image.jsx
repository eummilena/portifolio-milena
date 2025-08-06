import React from 'react'
import Ilustracao from '../Assets/Ilustracao.svg'
import styles from './Image.module.css'

const Image = () => {
    return (
        <figure className={styles.image}>
            <img src={Ilustracao} alt="Ilustração de uma mulher programadora" />
        </figure>
    )
}

export default Image