import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Nav from './components/Nav'
import Image from './components/Image'
import Footer from './components/Footer'
import About from './components/About'
function App() {
  return (
    <div className='container'>

      <Header />
      <Nav />

      <About />

      {/* Assuming Image is a component that displays an image */}
      <Image />

      <Footer />
    </div>
  )
}

export default App
