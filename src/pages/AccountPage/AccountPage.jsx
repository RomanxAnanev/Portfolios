import React, { useEffect, useState } from 'react'
import style from './AccountPage.module.css'
import { Card } from '../../components/Card/Card'
import { GoBackButton } from '../../components/GoBackButton/GoBackButton' 
import { ResumeService } from '../../components/ResumeService/ResumeService'
import { ZeroScroll } from '../../components/ZeroScroll/ZeroScroll'
import { NavLink } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';


export const AccountPage = () => {
    const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs" );
 
    const email = localStorage.getItem("email");
    const [user, setUser] = useState(null);
  ZeroScroll()

  const editPage = {
    src: '/EditProfile'
  }

  useEffect(() => {
    (async () => {
        const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq("email", email);
        setUser(data[0]);
    })()
    console.log(user);
  }, [])

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
                            {user && user.name ? user.name : "Your name"}
                        </h1>
                        <h2>
                            {user && user.profession ? user.profession : "Your profession"}
                        </h2>
                    </div>
                    {email && user && email === user.email && (
                        <div className={style.button__edit}>
                        <NavLink to = {editPage.src}>
                                <img src="/editProfile.svg" alt="" />
                        </NavLink>
                        </div>
                    )}
                    
                </div>
                <div className={style.content__desc}>
                    <p>
                        {user && user.description ? user.description : "Your description"}
                    </p>
                </div>
                <div className={style.resumeService}>
                    {user &&
                    <ResumeService vk={user.vk} telegram={user.telegram} facebook={user.facebook} dribble={user.dribble} behance={user.behance} figma={user.figma} ps={user.ps} ai={user.ai} />
                    }
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
