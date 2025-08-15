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
                <p>Olá, eu sou a <strong>Milena</strong>! Trabalho como desenvolvedora front-end há 2 anos, criando e dando vida a sites e aplicativos. Gosto de transformar ideias em projetos funcionais e visualmente agradáveis, unindo código limpo a boas práticas de UI/UX. Atualmente, estou mergulhada no universo do React e TypeScript, sempre buscando aprender mais e criar experiências que sejam práticas e agradáveis para o usuário.</p>
                <img src={Poligonos} className={styles.poligonos} alt="" aria-hidden="true" />
            </div>
            <div className={styles.buttonContainer}>
                <Button ariaLabel='Baixar currículo em PDF' href="/curriculo.pdf" download="curriculo-milena-frontend.pdf">Baixar cv</Button>
                <img src={bolinhas} className={styles.bolinhas} alt="" aria-hidden="true" />
            </div>
        </main>
    )
}

export default About


