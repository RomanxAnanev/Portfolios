import React from 'react'
import style from './Resumes.module.css'
import { Search } from '../../components/Search/Search'
import { Resume } from '../../components/Resume/Resume'
import { ZeroScroll } from '../../components/ZeroScroll/ZeroScroll'

export const Resumes = () => {

  ZeroScroll()

  return (
    <div className={style.resumes}>
      <div className={style.resumes__func}>
          <Search />
          <button className={style.func__button}>
           Add  resume
          </button>
      </div>
      <div className={style.resumes__resume}>
        <Resume />
        <Resume />
        <Resume />
        <Resume />
        <Resume />
        <Resume />
        <Resume />
      </div>

    </div>
  )
}
