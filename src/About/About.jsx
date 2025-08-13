import styles from './About.module.css'
import bolinhas from '../Assets/bolinhas.svg'
import Poligonos from '../Assets/poligonos.svg'
import Button from '../components/Button'
import Head from '../components/Head'

const About = () => {
    return (
        <main className={styles.main}>
            <Head title='Sobre' />
            <h1><span className='barra' aria-hidden="true">/</span>sobre <span className='dot' aria-hidden="true">.</span></h1>
            <div className={styles.text} aria-label='Texto descritivo sobre mim' >
                <p>Lorem ipsum dolor sit amet. Qui iusto eaque ab sunt ipsam eum dolorum internos. Quo assumenda galisum ad porro quos sed dolor dolorem ut omnis quaerat et rerum voluptas ex reiciendis culpa. Qui amet unde qui delectus nostrum qui repellendus voluptatem vel delectus ipsam est possimus enim? 33 quia deleniti ut quia explicabo ut praesentium rerum.</p>
                <img src={Poligonos} className={styles.poligonos} alt="" aria-hidden="true" />
            </div>
            <div className={styles.buttonContainer}>
                <Button ariaLabel='baixar currículo'>Baixar cv</Button>
                <img src={bolinhas} className={styles.bolinhas} alt="" aria-hidden="true" />
            </div>
        </main>
    )
}

export default About


