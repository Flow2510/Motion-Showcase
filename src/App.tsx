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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
  const [favoritesAnimations, setFavoritesAnimations] = useState<AnimationTypes[]>([])

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
            <Route path='/collection' element={<CollectionPage isDesktop={isDesktop} favoritesAnimations={favoritesAnimations} setFavoritesAnimations={setFavoritesAnimations}/>}/>
            <Route path='/collection/:slug' element={<EffectPage favoritesAnimations={favoritesAnimations} setFavoritesAnimations={setFavoritesAnimations}/>}/>
            <Route path='/collection/:slug/demo' element={<DemoPage />}/>
            <Route path='/favorites' element={<FavoritesPage favoritesAnimations={favoritesAnimations} setFavoritesAnimations={setFavoritesAnimations}/>}/>
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
      <Footer />
    </>
  )
}

export default App

// refaire les meta, alts, etc
// faire une section pour indiquer qu'il faut scroll sur la page demo et pour indiquer la fin de la page
// refaire la page effect et ajouter du contenu, et le code
// refaire les meta de chaque et rajouter textes, descriptions, methodes, etc.... (regarder effectPage pour voir les besoins)
// faire les favoris avec storagesession
// ajouter contenu pour la section about
// verifier le responsive
// ajouter des animations de texte/hover/click/loader pas de scroll
// faire nouvelle animation titre footer
// remplacer le projet lorem agency par celui ci