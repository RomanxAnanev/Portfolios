import React from "react";
import styles from "./ResumeService.css"

export const ResumeService = ({vk, telegram, facebook, dribble, behance, figma, ps, ai}) =>{
    return(
        <div>
            <div className="service__contacts services">
                <p>Contacts:</p>
                <div className='contacts__services serviceImg'>
                    {vk && <img src="/vk.svg" alt="" />}
                    {telegram && <img src="/telegram.svg" alt="" />}
                    {facebook && <img src="/twitter.svg" alt="" />}
                </div>
            </div>
            <div className="service__projects services">
                <p>Projects:</p>
                <div className='projects__services serviceImg'>
                    {dribble && <img src="/Dribble.svg" alt="" />}
                    {behance && <img src="/Behance.svg" alt="" />}

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