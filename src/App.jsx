import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
import Nav from './Nav/Nav'
import Image from './components/Image'
import Footer from './Footer/Footer'
import About from './About/About'
function App() {
  return (
    <div className='container'>

      <Header />
      <Nav />

      <Home />
      {/* <About /> */}

      <Image />

      <Footer />
    </div>
  )
}

export default App
