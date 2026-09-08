import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <App />
    {/* <h2>Something </h2> */}
  </ThemeContext>

)
