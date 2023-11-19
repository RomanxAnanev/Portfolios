import React from 'react'
import style from './EditProfile.module.css'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton' 
import { SelectDropdownContact } from "../../components/SelectDropDown/SelectDropDownContact";
import { SelectDropdownProject } from "../../components/SelectDropDown/SelectDropDownProject";
import { SelectDropdownStack } from "../../components/SelectDropDown/SelectDropDownStack";


export const EditProfile = () => {
  return (
    <div className={style.editProfile}>
      
      <GoBackButton />

      <div className={style.editProfile__content}>
        <img className={style.profile__img} src="/AccountImage.png" alt="" />
        <label className={style.inputs} htmlFor="">
          <h1 className={style.input__title}>Name</h1>
          <input type="text" />
          <h1 className={style.input__title}>Profession</h1>
          <input type="text" />
          <h1 className={style.input__title}>Descriptoin</h1>
          <input type="text" />
        </label>     
      </div>
      <label className={style.services} htmlFor="">
        <div className={style.service__inputs}>
            <div className={style.service}>
                <SelectDropdownContact />
            </div>
            <div className={style.service}>
                <SelectDropdownProject />
            </div>
            <div className={style.service}>
                <SelectDropdownStack />
            </div>
        </div>
        <button className={style.button} type='submit'>Confirm</button>
      </label>

    </div>
  )
}
