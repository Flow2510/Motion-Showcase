import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import HomePage from './pages/homepage'
import DemoPage from './pages/demopage'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)

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
      <header className='absolute top-0 left-0 flex justify-between w-full px-5 py-2.5 items-center z-100'>
        <h1 className='text-sm font-semibold'>Sendra Florian</h1>
        <div>
          <NavLink to={'/'} className='text-sm font-semibold cursor-pointer'>
            menu
          </NavLink>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<HomePage isDesktop={isDesktop} />}/>
        <Route path='/animations/:slug' element={<DemoPage />}/>
      </Routes>
    </>
  )
}

export default App

// faire un nouveau design