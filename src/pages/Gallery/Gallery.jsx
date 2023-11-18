import React from 'react'
import style from './Gallery.module.css'
import { Search } from '../../components/Search/Search'
import { Card } from '../../components/Card/Card'
import { NavLink } from 'react-router-dom'


export const Gallery = () => {

    const addProjectPage = {
    name: 'Add work',
    src: '/AddProjectPage',
  }

  return (
    <div className={style.bg}>
        <div className={style.gallery}>
          <div className={style.gallary__func}>
            <Search />
            
            <NavLink to={addProjectPage.src}>
              <button className={style.func__button}>
               {addProjectPage.name}
              </button>
            </NavLink>
            
          </div>
          <div className={style.gallery__projects}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
    </div>
  )
}
