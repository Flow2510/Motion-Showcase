import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import CollectionPage from './pages/collectionpage'
import EffectPage from './pages/effectpage'
import Footer from './components/footer/footer'
import Menu from './components/menu/menu'

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      <AnimatePresence mode='wait'>
        {menuIsOpen &&
          <Menu 
            toggleMenu={() => setMenuIsOpen(prev => !prev)}
          />
        }
      </AnimatePresence>
      <Header 
        toggleMenu={() => setMenuIsOpen(prev => !prev)}
        menuIsOpen={menuIsOpen}
        isDesktop={isDesktop}
      />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' element={<HomePage isDesktop={isDesktop}/>}/>
          <Route path='/collection' element={<CollectionPage isDesktop={isDesktop}/>}/>
          <Route path='/collection/:slug' element={<EffectPage />}/>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
