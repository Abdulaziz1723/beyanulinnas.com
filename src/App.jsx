import { StrictMode } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
import Main from './main.jsx';

function Header () {
  return( 
      <header id="header">
      <div className="logoPart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1." stroke="currentColor" id="logo">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <h1>مَدْرَسَةْ بَيَان لِلنّاس</h1>  
      </div>        
      <div className="searchPart">
          <input type="search" placeholder="اطلب درسنا الذي تحبه" id="search"/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" id="searchLogo">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
      </div>
  </header>
)
}

function Footer() {
  return(
      <>
      <footer>
      <div className="partOne">
          <h1>Mine works</h1>
          <ul>
              <li><a href="https://finalattempt1.vercel.app/">Food_ordering_website</a></li>
              <li><a href="">Furniture_works</a></li>
              <li><a href="">Portfolio_website</a></li>
          </ul>
      </div>
      <div className="partTwo">
          <h1>Links</h1>
          <div>
              <a href="https://t.me/AbdulazizSeman"><img src="/images/telegram.png" id="logos" loading="lazy"/></a>
              <a href="https://www.youtube.com/channel/UCxXukuEJlM5I8TnFbgJDChg"><img src="/images/utube.jpg" id="logos" loading="lazy"/></a>
          </div>
      </div>
  </footer>
  <div className="at">
            <p>©2025</p>
  </div>
      </>

  )
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
  <Header/>
  <Main/>
  <Footer/>
</StrictMode>
)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Keshf from './components/Keshf';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keshf" element={<Keshf />} />
      </Routes>
    </Router>
  );
}

export default App;

