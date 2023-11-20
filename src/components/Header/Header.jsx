import React, { useEffect, useState } from 'react'
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


export const Header = () => {
    const email = localStorage.getItem("email")
    const id = localStorage.getItem("id");
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
                <NavLink to={email ? `/AccountPage/${id}` : "/LogIn"}>
                    <button className='login'>
                        {email ? location.href.includes("/AccountPage") ? "LogOut" : "Profile" : "LogIn"}
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

