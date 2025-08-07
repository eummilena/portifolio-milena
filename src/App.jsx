import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Nav from './Nav/Nav'
import Image from './components/Image'
import Footer from './Footer/Footer'
import About from './About/About'
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
        </Routes>
        <Image />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
