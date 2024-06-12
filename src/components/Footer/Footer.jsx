import React from 'react'
import style from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const menu = [
    {
     name: 'Home',
     src: '/',   
    },
    {
     name: 'Resumes',
     src: '/Resumes',
    },
    {
     name: 'Gallery',
     src: '/Gallery',
    }
]

export const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.container}>
        <div className={style.footer__logo}>
            <a href="/"><img className='logo' src="/Logo.svg" alt="logo" /></a>
        </div>
        <div className={style.footer__nav}>
            <ul className={style.nav__list}>
                {menu.map(item => (
                <NavLink to={item.src} key={item.name}>
                    <li>{item.name}</li>
                </NavLink>
                ))}
            </ul>
        </div>
        </div>
    </footer>
  )
}
