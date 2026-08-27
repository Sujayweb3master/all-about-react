import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import ProductDetails from './pages/ProductDetails'
import ProductLayout from './pages/ProductLayout'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<ProductLayout />} >
          <Route index element={<ProductDetails />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App