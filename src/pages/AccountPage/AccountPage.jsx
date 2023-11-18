import React from 'react'
import style from './AccountPage.module.css'
import { Card } from '../../components/Card/Card'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton' 
import { ResumeService } from '../../components/ResumeService/ResumeService'

export const AccountPage = () => {
  return (


    <div className={style.accountPage__container}>

        <GoBackButton />

        <div className={style.accountPage__content}>
            <img className={style.content__img} src="/AccountImage.png" alt="" />
            <div className={style.content__author}>
                <div className={style.author__profile}>
                    <div className={style.profile__wrapper}>
                        <div className={style.profile__bgImg}>
                            <img className={style.profile__img} src="/Rectangle 6122.png" alt="" />
                        </div>
                    </div>
                    <div className={style.profile__text}>
                        <h1>
                            Alexey Kuznetsov
                        </h1>
                        <h2>
                            UX | UI Designer
                        </h2>
                    </div>
                </div>
                <div className={style.content__desc}>
                    <p>
                        People can leave their vacancies for employers to come out to them or find a person for a joint projectPeople can leave their vacancies for employers to come out to them or find a person for a joint project
                    </p>
                </div>
                <div className={style.resumeService}>
                    <ResumeService />
                </div>
            </div>
            
        </div>
        <div className={style.accountPage__projects}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}
