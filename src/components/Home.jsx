import React from 'react'
import Icon from '../Assets/Group.svg'
import styles from './Home.module.css'
import 'animate.css';

const Home = () => {
    return (
        <main className={styles.main}>

            <div className={styles.text}>
                <p>Olá, eu sou <strong>Milena!</strong></p>
                <h1>Desenvolvedora <br /> Frontend<span className={styles.dot}>.</span></h1>
                <p>Transformo ideias em interfaces funcionais, bonitas e intuitivas.</p>
            </div>

            <div className={styles.icon}>
                <img src={Icon} alt="ícone" className='animate__animated animate__flip' />
            </div>

        </main>
    )
}

export default Home