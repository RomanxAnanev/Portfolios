import React from 'react'
import style from './Header.css'
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
const login = 
    {
        name: 'LogIn',
        src: '/LogIn',
    }


export const Header = () => {
  return (
    <div className="container">
        <div className='header'>
        <div className='header__logo'>
            <a href="/"><img className='logo' src="/Logo.svg" alt="logo" /></a>
        </div>
        <div className='header__nav'>
            <div className='nav__menu'>
                <ul className='menu'>
                    {menu.map(item => (
                    <NavLink to={item.src} key={item.name} className={({isActive}) => isActive ?  "header__li header__li_Active" : "header__li"} >
                        <div>
                            {item.name}
                        </div>
                    </NavLink>
                    ))}
                </ul>
            </div>
            <div className='nav__login'>
                <NavLink to={login.src}>
                    <button className='login'>
                        {login.name}
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

