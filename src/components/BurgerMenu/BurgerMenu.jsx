import React, { useState } from 'react'
import style from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState('burgerBar unclicked')
  const [menuClass, setMenuClass] = useState('menu hidden')
  const [isMennuClicked, setIsMenuClicked] = useState(false)
  return (
    <div style={{width: '100%', height: '100vh'}}>
      <nav>
        <div className={style.burgerMenu}>
           <div className={style.burgerClass}></div>
           <div className={style.burgerClass}></div>
           <div className={style.burgerClass}></div>

        </div>
      </nav>

      <div className={style.menuClass}></div>
    </div>
  )
}

export default BurgerMenu