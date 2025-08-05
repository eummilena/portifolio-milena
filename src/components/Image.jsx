import React from 'react'
import Ilustracao from '../Assets/Ilustracao.svg'
import styles from './Image.module.css'

const Image = () => {
    return (
        <div className={styles.image}>
            <img src={Ilustracao} alt="Ilustração mulher programadora" />
        </div>
    )
}

export default Image