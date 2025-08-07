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
function App() {
  return (
    <div className='container'>

      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/habilidades' element={<Skill />} />
          <Route path='/projetos' element={<Projects />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
        <Image />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
