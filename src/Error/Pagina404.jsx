import React from 'react'
import styles from './Pagina404.module.css'
import notFound from '../Assets/error.svg'
import Head from '../components/Head'

const Pagina404 = () => {
    return (
        <main className={styles.main}>
            <Head title='Página não encontrada' />
            <h1><span className='barra' aria-hidden='true'>/</span> Página não encontrada <span className='dot' aria-hidden='true'>.</span></h1>
            <section className={styles.section}>
                <img src={notFound} alt="Imagem de erro 404" className={styles.image} />
            </section>

        </main>
    )
}

export default Pagina404