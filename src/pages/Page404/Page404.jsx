import React from 'react'
import style from './Page404.module.css'
import { NavLink } from 'react-router-dom'

export const Page404 = () => {

  const home = 
  {
    name: 'Go back to home page',
    src: '/',
  }

  return (
    <div className={style.Page404}>
        <img src="/404.svg" alt="" />
        <h1 className={style.titleH1}>Page not found</h1>
        <NavLink to={home.src}  className={style.form__home}>
          <h2 className={style.titleH2}>{home.name}</h2>
        </NavLink>
    </div>
  )
}
