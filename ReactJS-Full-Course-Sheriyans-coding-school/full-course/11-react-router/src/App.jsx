import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Home from './pages/Home'
import Men from './pages/Men'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import ProductLayout from './pages/ProductLayout'
import Women from './pages/Women'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar />
      <Navbar2 />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<ProductLayout />} >
          <Route index element={<ProductDetails />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='course-details/:courseId' element={<CourseDetail />} />
        <Route path='course-details/:course/:id' element={<CourseDetail />} />
        <Route path='course-details' element={<Course />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App