import React from 'react'
import Icon from '../Assets/Group.svg'
import styles from './Home.module.css'
import Image from '../components/Image';
import 'animate.css';
import Head from '../components/Head';

const Home = () => {
    return (
        <main className={styles.main}>
            <Head title='Início' />
            <div className={styles.text}>
                <h1>Desenvolvedora <br /> Frontend<span className='dot' aria-hidden="true">.</span></h1>
                <p>Transformo ideias em interfaces funcionais, bonitas e intuitivas.</p>
            </div>

            <div className={styles.icon}>
                <img src={Icon} alt="" className='animate__animated animate__flip' aria-hidden="true" />
            </div>
            <Image />

        </main>
    )
}

export default Home