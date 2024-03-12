import React, {useEffect, useState} from 'react'
import style from './AccountPage.module.css'
import {Card} from '../../components/Card/Card'
import {GoBackButton} from '../../components/GoBackButton/GoBackButton'
import {ResumeService} from '../../components/ResumeService/ResumeService'
import {ZeroScroll} from '../../components/ZeroScroll/ZeroScroll'
import {NavLink, useParams} from 'react-router-dom'
import {createClient} from '@supabase/supabase-js';


export const AccountPage = () => {
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
  const {id} = useParams();
  const email = localStorage.getItem("email");
  const idUser = localStorage.getItem("id");
  const [user, setUser] = useState(null);
  const [works, setWorks] = useState([]);

  const [loading, setLoading] = useState(false);

  ZeroScroll()

  const editPage = {
    src: '/EditProfile'
  }

  const getMyWorks = async () => {
    try {
      setLoading(true);
      const {data} = await supabase
        .from('works')
        .select('*')
        .eq("user_id", id);

      setWorks(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getMyWorks();

      if (!(id === idUser)) {
        const {data} = await supabase
          .from('users')
          .select('*')
          .eq("id", id);
        return setUser(data[0]);
      }

      const {data} = await supabase
        .from('users')
        .select('*')
        .eq("email", email);
      setUser(data[0]);
    })();
  }, [id]);

  return (
    <div className={style.accountPage__container}>

      <GoBackButton/>

      <div className={style.accountPage__content}>
        {user &&  <img className={style.content__img} src={user.avatar} alt=""/>}

        <div className={style.content__author}>
          <div className={style.author__profile}>
            <div className={style.profile__text}>
              <h1>
                {user && user.name ? user.name : "Your name"}
              </h1>
              <h2>
                {user && user.profession ? user.profession : "Your profession"}
              </h2>
            </div>
            {id === idUser && (
              <div className={style.button__edit}>
                <NavLink to={editPage.src}>
                  <img src="/editProfile.svg" alt=""/>
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
              <ResumeService vk={user.vk} telegram={user.telegram} facebook={user.facebook} dribble={user.dribble}
                             behance={user.behance} figma={user.figma} ps={user.ps} ai={user.ai} />
            }
          </div>
        </div>

      </div>
      <div className={style.accountPage__projects}>
        {loading ?
          <h3>Loading...</h3>
          :
          !!works.length ?
            works.map(work => (
              <Card key={work.id} avatar={work.user_avatar} id={work.id} idUser={work.user_id} username={work.username} likes={work.count} img={work.img_path}/>
            ))
            :
            <h3>The user has no published projects</h3>
        }
      </div>
    </div>
  )
}
