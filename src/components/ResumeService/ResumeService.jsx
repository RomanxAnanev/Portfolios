import React from "react";
import styles from "./ResumeService.css"

export const ResumeService = ({vk, telegram, facebook, dribble, behance, figma, ps, ai}) =>{
    return(
        <div>
            <div className="service__contacts services">
                <p>Contacts:</p>
                <div className='contacts__services serviceImg'>
                    {vk && <a href={`${vk}`}><img src="/vk.svg" alt="" /></a>}
                    {telegram && <a href={`${telegram}`}><img src="/telegram.svg" alt="" /></a>}
                    {facebook && <a href={`${facebook}`}><img src="/twitter.svg" alt="" /></a>}
                </div>
            </div>
            <div className="service__projects services">
                <p>Projects:</p>
                <div className='projects__services serviceImg'>
                    {dribble && <a href={`${dribble}`}>
                        <img src="/Dribble.svg" alt="" />
                    </a>}
                    {behance && <a href={`${behance}`}><img src="/Behance.svg" alt="" /></a>}

                </div>
            </div>
            <div className="service__stack services">
                <p>Stack:</p>
                <div className='stack__services serviceImg'>
                    {figma && <img src="/Figma.svg" alt="" />}
                    {ps && <img src="/Photoshop.svg" alt="" />}
                    {ai && <img src="/Illustrator.svg" alt="" />}
                </div>
            </div>
        </div>
    )
}