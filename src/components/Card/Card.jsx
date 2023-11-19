import React from 'react'
import style from './Card.module.css'
import { NavLink } from 'react-router-dom'
const likes = 312

export const Card = () => {

    const projectPage = 
    {
        src: '/ProjectPage',
    }

  return (
    <div className={style.card}>
        
        <NavLink to={projectPage.src}  className={style.form__home}>
            <img className={style.card__image} src="/cardImage.png" alt="" />
        </NavLink>
        
        <div className={style.card__content}>
            <div className={style.content__author}>
                <img className={style.author__image} src="/AccountImage.png" alt="" />
                <h1 className={style.author__name}>Alexey Kuznetsov</h1>
            </div>
            <div className={style.content__likes}>
                <div className={style.likes__count}>
                    {likes}
                </div>
                <button className={style.likes__button}>
                    <img className={style.likes__img} src="/likes.svg" alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}
