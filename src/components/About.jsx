import React from 'react'
import styles from './About.module.css'
import bolinhas from '../Assets/bolinhas.svg'
import Vector from '../Assets/Vector.png'
import Poligonos from '../Assets/poligonos.svg'

const About = () => {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1><span className='barra'>/</span>sobre<span className='dot'>.</span></h1>
            </div>
            <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet. Qui iusto eaque ab sunt ipsam eum dolorum internos. Quo assumenda galisum ad porro quos sed dolor dolorem ut omnis quaerat et rerum voluptas ex reiciendis culpa. Qui amet unde qui delectus nostrum qui repellendus voluptatem vel delectus ipsam est possimus enim? 33 quia deleniti ut quia explicabo ut praesentium rerum.</p>
                <img src={Poligonos} className={styles.poligonos} alt="Poligonos" />
            </div>
            <div className={styles.buttonContainer}>
                <button type='button'>Baixar CV</button>
                <img src={bolinhas} className={styles.bolinhas} alt="Bolinhas" />
            </div>

        </main>
    )
}

export default About 


