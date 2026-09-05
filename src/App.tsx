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
import FavoritesPage from './pages/favoritespage'
import type { AnimationTypes } from './types/animation'

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
  const [favoritesAnimations, setFavoritesAnimations] = useState<AnimationTypes[]>([])

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })
  
  return (
    <SmoothScroll>
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
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path='/' element={<HomePage isDesktop={isDesktop}/>}/>
            <Route path='/collection' element={<CollectionPage isDesktop={isDesktop} favoritesAnimations={favoritesAnimations} setFavoritesAnimations={setFavoritesAnimations}/>}/>
            <Route path='/collection/:slug' element={<EffectPage favoritesAnimations={favoritesAnimations} setFavoritesAnimations={setFavoritesAnimations} isDesktop={isDesktop}/>}/>
            <Route path='/collection/:slug/demo' element={<DemoPage />}/>
            <Route path='/favorites' element={<FavoritesPage favoritesAnimations={favoritesAnimations} setFavoritesAnimations={setFavoritesAnimations}/>}/>
          </Routes>
        </AnimatePresence>
      <Footer />
    </SmoothScroll>
  )
}

export default App

// faire une section pour indiquer qu'il faut scroll sur la page demo et pour indiquer la fin de la page
// faire une section de fin des animations
// ajouter le code sur la page effect,
// refaire les meta de chaque pour un meilleur contenu, verifier les sections Before/After sur chaque
// faire les favoris avec storagesession
// faire/trouver meilleur design pour les cards about section