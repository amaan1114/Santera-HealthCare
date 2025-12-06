import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Footer from './Pages/HomeComponents/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/About-us'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
      
    </Routes>
    </Router>
      <Footer></Footer>
    </>
  )
}

export default App
