import React from 'react'
import style from './Resume.css'
import { ResumeService } from  '../ResumeService/ResumeService.jsx'
import { NavLink } from 'react-router-dom'


export const Resume = () => {

    const resume = [
        {
            name: '',
            profession: '',
            contacts: '',
            stack: '',
            avgPrice: ''
        }
    ]
    const projectPage = 
    {  
        src: '/AccountPage',
    }

    return (
    <div className="resume">
        <div>
            <div className="resume__profile">
                <div className="profile__avatar">
                    <img src="avatar.png" alt="" />
                </div>
                <div className="profile__info">
                    <h1 className="info__name">
                        Alexey Kuznetsov
                    </h1>
                    <h3 className="info__spec">
                        UX | UI Designer
                    </h3>
                </div>
            </div>
            <div className="resume__service">
                <ResumeService />
            </div>
            <img className='resume__line' src="/Line.svg" alt="" />
        </div>
        <div className="resume__link">
            <h2 className='link__title'>Average price:</h2>
            <div className="link__price">
                <p className='price__count'>500$</p>
                <div className="price__back"></div>
            </div>
            <div className="link__arrow">
                <img className='arrow' src="/resumeArrow.svg" alt="" />
            </div>
            <NavLink to={projectPage.src}>
                <button className='link__button'>Profile</button>
            </NavLink> 
            
        </div>
    </div>
    )
  }