import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import HomePage from './pages/homepage'
import DemoPage from './pages/demopage'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import Header from './components/header/header'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
  const [displayMode, setDisplayMode] = useState<'grid' | 'slider'>("slider")

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
    
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage isDesktop={isDesktop} displayMode={displayMode} setDisplayMode={setDisplayMode}/>}/>
        <Route path='/animations/:slug' element={<DemoPage />}/>
      </Routes>
    </>
  )
}

export default App

// faire un nouveau design
// animer le site
// faire un svg qui se rempli au progress