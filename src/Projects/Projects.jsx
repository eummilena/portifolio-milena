import React from 'react'
import styles from './Projects.module.css'
import bolinhas from '../Assets/bolinhas.svg'

const Projects = () => {
    return (
        <main className={styles.main}>
            <h1><span className='barra'>/</span>projetos<span className='dot'>.</span></h1>
            <section className={styles.section}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
            </section>
            <img src={bolinhas} className={styles.bolinhas} alt="" />
        </main >
    )
}

export default Projects