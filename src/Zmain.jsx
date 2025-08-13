import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Zresult from './Zfetch'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header id='Zbg'><h1>📖خذ عقيدتك📖</h1></header>
    <Zresult/>
  </StrictMode>
)