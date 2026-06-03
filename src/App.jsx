
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'
import Aboutpage from './pages/Aboutpage'
import Signup from './pages/Signup'
import OneProductPage from './pages/OneProductPage'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact" element={<Contactpage/> } />
      <Route path="/about" element={<Aboutpage/> } />
      <Route path="/products/:id" element={<OneProductPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
