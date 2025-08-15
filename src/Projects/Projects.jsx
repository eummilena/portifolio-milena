import React from 'react'
import styles from './Projects.module.css'
import bolinhas from '../Assets/bolinhas.svg'
import Head from '../components/Head'

const Projects = () => {
    return (
        <main className={styles.main}>
            <Head title='Projetos' />
            <h1><span className='barra' aria-hidden="true">/</span>projetos <span className='dot' aria-hidden="true">.</span></h1>
            <section className={styles.section}>
                <article className={styles.square}>
                    <h2>Projeto 1</h2>
                    <p>Descrição do projeto</p>
                </article>
                <article className={styles.square}>
                    <h2>Projeto 2 </h2>
                    <p>Descrição do projeto</p>
                </article>
                <article className={styles.square}>
                    <h2>Projeto 3</h2>
                    <p>Descrição do projeto</p>
                </article>
            </section>
            <img src={bolinhas} className={styles.bolinhas} alt="" aria-hidden="true" />
        </main >
    )
}

export default Projects