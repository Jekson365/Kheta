import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import Products from './pages/products/Products'
import { NavMenu } from './components/NavMenu'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
