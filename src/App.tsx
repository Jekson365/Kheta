import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import Products from './pages/products/Products'
import { NavMenu } from './components/NavMenu'
import Footer from './components/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ProdPage from './pages/prodpage/ProdPage'


function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:type' element={<Products />} />
          <Route path='/product/:id' element={<ProdPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
