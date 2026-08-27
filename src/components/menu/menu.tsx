import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
import { animations } from "../../animations";

type Props ={
    readonly toggleMenu : () => void;
}

export default function Menu({ toggleMenu } : Props) {
    return(
        <motion.div 
            key={"menu"}
            className='fixed bottom-0 left-0 w-full p-5 h-full overflow-hidden z-50 flex items-end backdrop-blur-xs'
          >
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.1 }}
              className='bg-neutral-800 w-full rounded-2xl flex flex-col text-neutral-50 p-8 justify-center overflow-hidden gap-8'
            >
              <div className='flex flex-col text-[22px]'>
                <NavLink to={'/'} onClick={toggleMenu} className={'py-2 border-b border-neutral-50/15'}>Home</NavLink>
                <NavLink to={'/collection'} onClick={toggleMenu} className={"flex gap-1 py-2 border-b border-neutral-50/15"}><span>Collection</span> <span className='text-sm text-lime-400'>{animations.length}</span></NavLink>
                <NavLink to={'/'} onClick={toggleMenu} className={'py-2 flex gap-1 border-b border-neutral-50/15'}><span>Favorites</span> <span className='text-sm text-lime-400'>0</span></NavLink>
              </div>
              <div>
                <NavLink to={'/'} className={'flex items-center justify-center gap-1.5 bg-gray-200 rounded-full h-12 cursor-pointer uppercase text-neutral-950'}>
                  <span>
                    Contact
                  </span>
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
    )
}