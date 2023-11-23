import React from 'react'
import style from './Card.module.css'
import { NavLink } from 'react-router-dom'

export const Card = ({id, username, likes}) => {

    const projectPage = 
    {
        src: '/ProjectPage',
    }

  return (
    <div className={style.card}>
        
        <NavLink to={`${projectPage.src}/${id}`}  className={style.form__home}>
            <img className={style.card__image} src="/cardImage.png" alt="" />
        </NavLink>
        
        <div className={style.card__content}>
            <div className={style.content__author}>
                <img className={style.author__image} src="/AccountImage.png" alt="" />
                <h1 className={style.author__name}>{username}</h1>
            </div>
            <div className={style.content__likes}>
                <div className={style.likes__count}>
                    {likes || 0}
                </div>
                <button className={style.likes__button}>
                    <img className={style.likes__img} src="/likes.svg" alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}
