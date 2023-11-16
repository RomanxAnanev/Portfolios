import React from 'react'
import style from './Search.module.css'

export const Search = () => {
  return (
    <>
        <label htmlFor="" className={style.search}>
            <input className={style.input__search} type="text" placeholder='Write the anything' />
            <button className={style.input__search__button}>Search</button>
        </label>
    </>
  )
}
