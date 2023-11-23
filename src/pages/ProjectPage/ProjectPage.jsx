import React, {useEffect, useState} from 'react'
import style from './ProjectPage.module.css'
import {ResumeService} from '../../components/ResumeService/ResumeService'
import {GoBackButton} from '../../components/GoBackButton/GoBackButton'
import {ZeroScroll} from '../../components/ZeroScroll/ZeroScroll'
import {createClient} from "@supabase/supabase-js";
import {useParams} from "react-router-dom";

export const ProjectPage = () => {
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
  const {id} = useParams();
  const email = localStorage.getItem("email");
  const [work, setWork] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);

  ZeroScroll()

  const getWorkId = async () => {
    try {
      setLoading(true);
      const {data} = await supabase
        .from('works')
        .select('*')
        .eq("id", id);

      setWork(data[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      setLoadingUser(true);
      const {data} = await supabase
        .from('users')
        .select('*')
        .eq("email", email);

      setUser(data[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getWorkId();
      await getUser();
    })();
  }, [id]);

  return (
    <div className={style.projectPage}>

      <GoBackButton/>

      <div className={style.projectPage__container}>
        {loading && loadingUser ?
          <h3>Loading...</h3>
          :
          work && user && (
            <>
              <div className={style.projectPage__title}>
                <div className={style.title__h1}>
                  <h1>{work.name}</h1>
                </div>
                <div className={style.title__h2}>
                  <h2>{work.direction}</h2>
                </div>
              </div>
              <div className={style.projectPage__content}>
                <div className={style.content__img}>
                  <img src="/Rectangle 59.png" alt=""/>
                </div>
                <div className={style.content__author}>
                  <div className={style.author__profile}>
                    <div className={style.profile__wrapper}>
                      <div className={style.profile__bgImg}>
                        <img className={style.profile__img} src="/Rectangle 6122.png" alt=""/>
                      </div>
                    </div>
                    <div className={style.profile__text}>
                      <h1>
                        {user.name}
                      </h1>
                      <h2>
                        {user.profession}
                      </h2>
                    </div>
                  </div>
                  <div className={style.content__desc}>
                    <p>
                      {work.description}
                    </p>
                    <div className={style.resumeService}>
                      <ResumeService telegram={user.telegram} behance={user.behance} vk={user.vk} ps={user.ps} figma={user.figma} ai={user.ai} facebook={user.facebook} dribble={user.dribble} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
