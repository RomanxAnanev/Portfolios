import React from 'react'
import style from './Gallery.module.css'
import { Search } from '../../components/Search/Search'
import { Card } from '../../components/Card/Card'


export const Gallery = () => {



  return (
    <div className={style.bg}>
        <div className={style.gallery}>
          <div className={style.gallary__func}>
            <Search />
            <button className={style.func__button}>
             Add  project
            </button>
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
