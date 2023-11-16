import React from "react";
import styles from "./ResumeService.css"

export const ResumeService = () =>{
    return(
        <div>
            <div className="service__contacts services">
                <p>Contacts:</p>
                <div className='contacts__services serviceImg'>
                    <img src="/vk.svg" alt="" />
                    <img src="/telegram.svg" alt="" />
                    <img src="/twitter.svg" alt="" />
                </div>
            </div>
            <div className="service__projects services">
                <p>Projects:</p>
                <div className='projects__services serviceImg'>
                    <img src="/Dribble.svg" alt="" />
                    <img src="/Behance.svg" alt="" />

                </div>
            </div>
            <div className="service__stack services">
                <p>Stack:</p>
                <div className='stack__services serviceImg'>
                    <img src="/Figma.svg" alt="" />
                    <img src="/Photoshop.svg" alt="" />
                    <img src="/Illustrator.svg" alt="" />
                </div>
            </div>
        </div>
    )
}