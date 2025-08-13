import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Xresult from './Xfetch'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header><h1>📖كشف الشبهات📖</h1></header>
    <main>
    <Xresult/>    
    </main>
  </StrictMode>
)