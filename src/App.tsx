import './App.css'
import Home from './Pages/Home'
import Footer from './Pages/HomeComponents/Footer'
import AboutUs from './Pages/About-us'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
