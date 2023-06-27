import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import Products from './pages/products/Products'
import Footer from './components/Footer'
import ProdPage from './pages/prodpage/ProdPage'
import { Admin } from './admin/Admin'
import { NavMenu } from './components/NavMenu'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import axios from 'axios'
import 'aos/dist/aos.css';

import { createContext } from 'react'
import { Login } from './pages/auth/Login'


export const MainData = createContext<any>(null)

function App() {

  const [data, setData] = useState<any>()
  useEffect(() => {

    axios.get("http://localhost:8080/products/getall").then((res) => setData(res.data))
  },[])

  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <BrowserRouter>
        <MainData.Provider value={data}>
          <NavMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<ProdPage />} />
            <Route path='/admin/abdahsbdhabhsdbhasbudibahbdbqwqeq' element={<Admin />} />
            <Route path='login' element={<Login />} />
          </Routes>
          <Footer />
        </MainData.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
