import React, {useEffect, useState} from 'react'
import style from './Header.css'
import {NavLink, useParams} from 'react-router-dom'
import {createClient} from "@supabase/supabase-js";


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
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs" );
  const email = localStorage.getItem("email")
  const id = localStorage.getItem("id");

  const {userId} = useParams();

  const [title, setTitle] = useState("");

  async function signOut() {
    const { data } = await supabase.auth.signOut();
    localStorage.removeItem("email")
    localStorage.removeItem("id")
    location.href = `${location.origin}/`;
  }

  useEffect(() => {

  }, [userId]);

  return (
    <div className="container">
      <div className='header'>
        <div className='header__logo'>
          <a href="/"><img className='logo' src="/Logo.svg" alt="logo"/></a>
        </div>
        <div className='header__nav'>
          <div className='nav__menu'>
            <ul className='menu'>
              {menu.map(item => (
                <NavLink to={item.src} key={item.name}
                className={({isActive}) => isActive ? "header__li header__li_Active" : "header__li"}>
                  <div>
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className='nav__login'>
            {!email ?
              <NavLink to={"/LogIn"}>
                <button className='login'>
                  LogIn
                </button>
              </NavLink>
              :
              <NavLink to={email ? `/AccountPage/${id}` : "/LogIn"}>
                <button className='login' onClick={() => location.href.includes(`/AccountPage/${id}`) ? signOut() : () => {}}>
                  {location.href.includes(`/AccountPage/${id}`) ? "LogOut" : "Profile"}
                </button>
              </NavLink>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

