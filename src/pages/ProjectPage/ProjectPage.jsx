import React from 'react'
import style from './ProjectPage.module.css'
import { ResumeService } from '../../components/ResumeService/ResumeService'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton'
import { ZeroScroll } from '../../components/ZeroScroll/ZeroScroll'



export const ProjectPage = () => {
    
    ZeroScroll()

  return (
    <div className={style.projectPage}>

        <GoBackButton />

        <div className={style.projectPage__container}>
            <div className={style.projectPage__title}>
                <div className={style.title__h1}>
                    <h1>10 popular logo</h1>
                </div>
                <div className={style.title__h2}>
                    <h2>Graphic design</h2>
                </div>
            </div>
            <div className={style.projectPage__content}>
                <div className={style.content__img}>
                    <img src="/Rectangle 59.png" alt="" />
                </div>
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
                                UX  | UI Designer
                            </h2>
                        </div>
                    </div>
                    <div className={style.content__desc}>
                        <p>
                            People can leave their vacancies for employers to come out to them or find a person for a joint projectPeople can leave their vacancies for employers to come out to them or find a person for a joint project
                        </p>
                        <div className={style.resumeService}>
                            <ResumeService />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
