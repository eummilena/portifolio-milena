import React from 'react'
import styles from './Contact.module.css'
import linkedin from '../Assets/linkedin.svg'
import Button from '../components/Button'
import Email from '../Assets/email.svg'
import { GoArrowUpRight } from "react-icons/go";
import bolinhas from '../Assets/bolinhas.svg'
import Head from '../components/Head'


const Contact = () => {

    const email = 'milenabmota@gmail.com';
    const subject = 'Assunto do E-mail';
    const body = "Escreva sua mensagem aqui"

    function handleClick() {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <main className={styles.main}>
            <Head title='Contato' />
            <h1><span className='barra' aria-hidden="true">/</span>contato <span className='dot' aria-hidden="true">.</span></h1>
            <h2>Ficou com alguma dúvida ou quer bater um papo? Estou por aqui :)</h2>
            <section className={styles.section}>
                <div className={styles.socialMedia}>
                    <img src={Email} alt="Ícone Email" />
                    <a href="mailto:milenabmota@gmail.com">milenabmota@gmail.com</a>
                </div>
                <div className={styles.socialMedia}>
                    <img src={linkedin} alt="ícone LinkedIn" />
                    <a href="https://www.linkedin.com/in/milena-mota1/" rel="noopener noreferrer" target="_blank">Milena Mota</a>
                </div>
            </section>
            <Button ariaLabel="Abrir caixa de entrada de email" onClick={handleClick}>Fale comigo <GoArrowUpRight /></Button>
            <img src={bolinhas} className={styles.bolinhas} alt="" aria-hidden="true" />

        </main>
    )
}

export default Contact