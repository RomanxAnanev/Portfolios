import React, {useState} from 'react'
import style from './Resume.css'
import { ResumeService } from  '../ResumeService/ResumeService.jsx'
import { NavLink } from 'react-router-dom'


export const Resume = ({user_id, avatar, name, profession, vk, facebook, telegram, figma, ai, ps, dribble, behance, avgPrice }) => {
    const projectPage = 
    {  
        src: '/AccountPage',
    }

    return (
    <div className="resume">
        <div>
            <div className="resume__profile">
                <div className="profile__avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="profile__info">
                    <h1 className="info__name">
                        {name}
                    </h1>
                    <h3 className="info__spec">
                        {profession}
                    </h3>
                </div>
            </div>
            <div className="resume__service">
                <ResumeService vk={vk} ps={ps} figma={figma} ai={ai} behance={behance} telegram={telegram} dribble={dribble} facebook={facebook} />
            </div>
            <img className='resume__line' src="/Line.svg" alt="" />
        </div>
        <div className="resume__link">
            <h2 className='link__title'>Average price:</h2>
            <div className="link__price">
                <p className='price__count'>{avgPrice || "0"}$</p>
                <div className="price__back"></div>
            </div>
            <div className="link__arrow">
                <img className='arrow' src="/resumeArrow.svg" alt="" />
            </div>
            <NavLink to={`${projectPage.src}/${user_id}`}>
                <button className='link__button'>Profile</button>
            </NavLink>
        </div>
    </div>
    )
  }