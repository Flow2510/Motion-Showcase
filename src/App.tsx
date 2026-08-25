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
import DemoPage from './pages/demopage'
import ScrollToTop from './components/scrolltotop/scrolltotop'
import SmoothScroll from './components/smoothscroll/smoothscroll'

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
      <ScrollToTop />
      <SmoothScroll>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<HomePage isDesktop={isDesktop}/>}/>
            <Route path='/collection' element={<CollectionPage isDesktop={isDesktop}/>}/>
            <Route path='/collection/:slug' element={<EffectPage />}/>
            <Route path='/collection/:slug/demo' element={<DemoPage />}/>
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
      <Footer />
    </>
  )
}

export default App

// refaire toutes les videos et photos, 
// refaire les articles,
// faire les filtres,
// choisir une troisieme couleurs et la mettre sur la progress du slider latest et a d'autres endroit
// refaire les meta, alts, etc
// enlever l'animation de la page animation
// refaire la page effect et ajouter du contenu, et le code
// ajouter 2 sections dans homepage a la place des sections vides,
// verifier le responsive
// remplacer le projet lorem agency par celui ci