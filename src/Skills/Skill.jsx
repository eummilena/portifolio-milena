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


    return (
        <main className={styles.main}>
            <h1><span className='barra'>/</span>conhecimentos<span className='dot'>.</span></h1>
            <p className={styles.text}>Passe o cursor do mouse nos ícones para ler a descrição</p>

            <div className={styles.description}>
                <img src={ilustracao} alt="" className={styles.ilustracao} />
                <div className={styles.descriptionMedia}>
                    <div className={styles.icons}>
                        <img src={Html} alt="ícone html" id='html' onMouseOver={handleOver} />
                        <img src={css} alt="ícone css" id='css' onMouseOver={handleOver} />
                        <img src={js} alt="ícone javascript" id='js' onMouseOver={handleOver} />
                        <img src={ts} alt="ícone typescript" id='ts' onMouseOver={handleOver} />
                        <img src={react} alt="ícone react" id='react' onMouseOver={handleOver} />
                    </div>
                    <p className={styles.descriptionSkill} id='description'>{description}</p>
                    <div className={styles.socialMedia}>
                        <img src={git} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                    <img src={bolinhas} className={styles.bolinhas} alt="" />

                </div>
            </div>


        </main>
    )
}

export default Skill