import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App