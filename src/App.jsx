
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'
import Aboutpage from './pages/Aboutpage'
import Footer from './component/Footer'
import ProductDetailPage from './pages/ProductDetailPage'
import Signup from './component/Signup'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact" element={<Contactpage/> } />
      <Route path="/about" element={<Aboutpage/> } />
      <Route path="/product/:id" element={<ProductDetailPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
