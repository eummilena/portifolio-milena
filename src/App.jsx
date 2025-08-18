import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Nav from './Nav/Nav'
import Image from './components/Image'
import Footer from './Footer/Footer'
import About from './About/About'
import Skill from './Skills/Skill'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useMedia from './Hook/useMedia'
import Pagina404 from './Error/Pagina404'


function App() {

  const isMobile = useMedia("(max-width:900px)");
  return (
    <div className={isMobile ? 'containerMobile' : 'container'}>

      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/habilidades' element={<Skill />} />
          <Route path='/projetos' element={<Projects />} />
          <Route path='/contato' element={<Contact />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
