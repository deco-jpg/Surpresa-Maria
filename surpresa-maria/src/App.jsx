import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import Cartinhas from './pages/Cartas'
import MusicPlayer from './components/MusicPlayer';
function App() {
  return (
    <>
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
      </div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/cartinhas" element={<Cartinhas />} />
        </Routes>
      </main>

      <MusicPlayer />
      <Footer/>
    </>
  )
}

export default App
