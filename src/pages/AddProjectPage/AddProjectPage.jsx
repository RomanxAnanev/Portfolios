import React from 'react'
import style from './AddProjectPage.module.css'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'

export const AddProjectPage = () => {
  return (
    <div className={style.addProjectPage}>
      
      <GoBackButton />

      <div className={style.addProjectPage__content}>
        <img className={style.project__img} src="/AccountImage.png" alt="" />
        <label className={style.inputs} htmlFor="">
          <h1 className={style.input__title}>Project name</h1>
          <input type="text" />
          <h1 className={style.input__title}>Direction</h1>
          <input type="text" />
          <h1 className={style.input__title}>Description</h1>
          <input type="text" />
        </label>     
      </div>
      <label className={style.url} htmlFor="">
        <h1 className={style.input__title__url}>Url to your project</h1>
        <input className={style.input__url} type="url" />
        <button className={style.button} type='submit'>Confirm</button>
      </label>
    </div>
  )
}
