import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState('dark')
  return (
    <div>
      <h2>Theme is {theme}</h2>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App