import React, { useState } from 'react'
import Html from '../Assets/html.svg'
import css from '../Assets/css.svg'
import ts from '../Assets/ts.svg'
import ilustracao from '../Assets/ilustracao-Skill.svg'
import react from '../Assets/react.svg'
import linkedin from '../Assets/linkedin.svg'
import git from '../Assets/mdi_github.svg'
import js from '../Assets/javascript.svg'
import bolinhas from '../Assets/bolinhas.svg'
import styles from './Skill.module.css'
import Head from '../components/Head'
import useMedia from '../Hook/useMedia'

const descriptions = {
    html: 'HTML5 – Linguagem de marcação usada para estruturar o conteúdo de páginas web, garantindo semântica e acessibilidade.',
    css: 'CSS3 – Linguagem de estilo responsável pela aparência e layout das páginas, incluindo design responsivo e animações.',
    js: 'JavaScript (ES6+) – Linguagem de programação que adiciona interatividade, lógica e dinamismo às aplicações web.',
    ts: 'TypeScript – Superset do JavaScript que adiciona tipagem estática, ajudando a prevenir erros e melhorar a manutenção do código.',
    react: 'React.js – Biblioteca JavaScript para criação de interfaces de usuário modernas e reativas, baseada em componentes.'
}

const Skill = () => {

    const [description, setDescription] = useState('');

    function handleOver({ target }) {
        setDescription(descriptions[target.id] || '')

    }
    const isMobile = useMedia("(max-width:600px)");


    return (
        <main className={styles.main}>
            <Head title='Habilidades' />
            <h1><span className='barra' aria-hidden="true">/</span>conhecimentos <span className='dot' aria-hidden="true">.</span></h1>
            <p className={styles.text}>Passe o cursor do mouse nos ícones para ler a descrição</p>
            {isMobile ? (
                <section className={styles.section}>
                    {<ul className={styles.icons}>
                        <li className={styles.skill}>
                            <img src={Html} alt="ícone html" id='html' aria-label='Ver descrição de HTML5' className={styles.icon} />
                            <p>{descriptions.html}</p>
                        </li>
                        <li className={styles.skill}>
                            <img src={css} alt="ícone css" id='css' aria-label='Ver descrição de CSS' className={styles.icon} />
                            <p>{descriptions.css}</p>
                        </li>
                        <li className={styles.skill}>
                            <img src={js} alt="ícone javascript" id='js' aria-label='Ver descrição de JavaScript' className={styles.icon} />
                            <p>{descriptions.js}</p>
                        </li>
                        <li className={styles.skill}>
                            <img src={ts} alt="ícone typescript" id='ts' aria-label='Ver descrição de TypeScript' className={styles.icon} />
                            <p>{descriptions.ts}</p>
                        </li>
                        <li className={styles.skill}>
                            <img src={react} alt="ícone react" id='react' aria-label='Ver descrição de React' className={styles.icon} />
                            <p>{descriptions.react}</p>
                        </li>
                    </ul>}
                </section>
            ) : (
                <section className={styles.section}>
                    <img src={ilustracao} alt="" className={styles.ilustracao} aria-hidden="true" />
                    <div className={styles.descriptionMedia}>
                        <ul className={styles.icons}>
                            <li><img src={Html} alt="ícone html" id='html' onMouseOver={handleOver} onFocus={handleOver} role='button' aria-label='Ver descrição de HTML5' className={styles.icon} /></li>
                            <li><img src={css} alt="ícone css" id='css' onMouseOver={handleOver} onFocus={handleOver} role='button' aria-label='Ver descrição de CSS' className={styles.icon} /></li>
                            <li><img src={js} alt="ícone javascript" id='js' onMouseOver={handleOver} onFocus={handleOver} role='button' aria-label='Ver descrição de JavaScript' className={styles.icon} /></li>
                            <li> <img src={ts} alt="ícone typescript" id='ts' onMouseOver={handleOver} onFocus={handleOver} role='button' aria-label='Ver descrição de TypeScript' className={styles.icon} /></li>
                            <li><img src={react} alt="ícone react" id='react' onMouseOver={handleOver} onFocus={handleOver} role='button' aria-label='Ver descrição de React' className={styles.icon} /></li>
                        </ul>
                        <p className={styles.descriptionSkill} aria-live='polite'>{description}</p>
                        <div className={styles.socialMedia}>
                            <a href="https://github.com/eummilena"><img src={git} alt="Acesse o GitHub de Milena" /></a>
                            <a href="https://www.linkedin.com/in/milena-mota1/"><img src={linkedin} alt="Acesse o LinkedIn de Milena" /></a>
                        </div>
                        <img src={bolinhas} className={styles.bolinhas} alt="" aria-hidden="true" />
                    </div>
                </section>
            )}

        </main>
    )
}

export default Skill