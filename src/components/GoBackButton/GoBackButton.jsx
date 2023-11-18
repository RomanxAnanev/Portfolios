import React from 'react'
import style from './GoBackButton.module.css'

export const GoBackButton = () => {

  const goBack = () => {
  window.history.back();
  };

  return (
    <button className={style.goBack} onClick={goBack}>Go back</button>
  )
}
