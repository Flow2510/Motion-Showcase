import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/homepage'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import CollectionPage from './pages/collectionpage'
import EffectPage from './pages/effectpage'
import Footer from './components/footer/footer'
import { animations } from './animations'

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
      <AnimatePresence>
        {menuIsOpen &&
          <motion.div 
            key={"menu"}
            className='fixed bottom-0 left-0 w-full p-5 h-full overflow-hidden z-50 flex items-end backdrop-blur-xs'
          >
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 300 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.1 }}
              className='bg-neutral-800 w-full h-100 rounded-2xl flex flex-col text-neutral-50 p-8 justify-center text-[22px] overflow-hidden'
            >
              <div className='flex flex-col'>
                <NavLink to={'/'} onClick={() => setMenuIsOpen(prev => !prev)} className={'py-2 border-b border-neutral-50/15'}>Home</NavLink>
                <NavLink to={'/collection'} onClick={() => setMenuIsOpen(prev => !prev)} className={"flex gap-1 py-2 border-b border-neutral-50/15"}><span>Collection</span> <span className='text-sm text-lime-300'>{animations.length}</span></NavLink>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
      <Header 
        toggleMenu={() => setMenuIsOpen(prev => !prev)}
        menuIsOpen={menuIsOpen}
        isDesktop={isDesktop}
      />
      <Routes>
        <Route path='/' element={<HomePage isDesktop={isDesktop}/>}/>
        <Route path='/collection' element={<CollectionPage isDesktop={isDesktop}/>}/>
        <Route path='/collection/:slug' element={<EffectPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
