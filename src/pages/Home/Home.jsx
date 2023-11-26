import React, {useEffect, useState} from 'react'
import style from './Home.css'
import {Resume} from '../../components/Resume/Resume'
import {NavLink} from 'react-router-dom'
import {ZeroScroll} from '../../components/ZeroScroll/ZeroScroll'
import {createClient} from "@supabase/supabase-js";

const gallery =
  {
    name: 'View gallery',
    src: '/Gallery',
  }
const resumes =
  {
    name: 'View resumes',
    src: '/Resumes',
  }
const addProjectPage =
  {
    name: 'Share work',
    src: '/addProjectPage',
  }


export const Home = () => {
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");

  const email = localStorage.getItem("email");
  const [resume, setResume] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLaseResume = async () => {
    try {
      setLoading(true);
      const {data} = await supabase
        .from('resumes')
        .select('*')
        .range(1, 3);

      setResume(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  ZeroScroll()

  useEffect(() => {
    (async () => {
      await getLaseResume();
    })();
  }, []);

  return (
    <>
      <section className='heroSeaction container'>
        <img className='heroSeaction_star' src="/HeroSeactionstar.svg" alt=""/>
        <div className="heroSeaction__portfolio">
          <h1 className='portfolio__titleH1'>
            Time to get
            <span> inspired</span>
          </h1>
          <h2 className='portfolio__titleH2'>
            Share your work and evaluate the work of others
          </h2>
          <p className='portfolio__descriprion'>
            When people share their work, they get feedback, find colleagues and are inspired by others
          </p>
          <div className='portfolio__banner'>
            <div className="banner__gallery">
              <div className="gallery__Row">
                <div className='gallery__Row__img'>
                  <img src="/Photo1.png" alt=""/>
                </div>
                <div className='gallery__Row__img'>
                  <img src="/Photo2.png" alt=""/>
                </div>
              </div>
              <div className="gallery__img">
                <img src="/GalleryVector.svg" alt=""/>
              </div>
              <div className="gallery__Row">
                <div className='gallery__Row__img'>
                  <img src="/Photo3.png" alt=""/>
                </div>
                <div className='gallery__Row__img'>
                  <img src="/Photo4.png" alt=""/>
                </div>
              </div>
            </div>
            <div className='banner__button__dsa'>
              <NavLink to={gallery.src}>
                <button className='banner__button'>
                  {gallery.name}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="heroSeaction__resumes">
          <h1 className="resumes__titleH1">Or start a project .</h1>
          <h2 className='resumes__titleH2'>Leave or view resumes</h2>
          <p className='resumes__descriprion'>
            People can leave their resumes for employers to come out to them or find a person for a joint project
          </p>
          <div className='resumes__resume'>
            <h3 className='resumes__resume_title'>last resume</h3>
            {loading ?
              <h3>Loading...</h3>
              :
              resume[0] &&
              <Resume name={resume[0].name} avatar={resume[0].user_avatar} profession={resume[0].profession} behance={resume[0].behance}
                      ai={resume[0].ai} telegram={resume[0].telegram} dribble={resume[0].dribble}
                      facebook={resume[0].facebook} avgPrice={resume[0].price} figma={resume[0].figma} ps={resume[0].ps}
                      vk={resume[0].vk} user_id={resume[0].user_id}/>
            }
          </div>
          <NavLink to={resumes.src}>
            <button className='resumes__button'>
              {resumes.name}
            </button>
          </NavLink>
        </div>
      </section>

      <section className="resumeSection__bg">
        <div className="resumeSeaction container">
          <div className="resumeSeacrion__title">
            <h1>
              Find employees people for a joint project or let them look for you !
            </h1>
            <div className="resumeTitleStar">
              <img src="/StarResumeSection.svg" alt=""/>
            </div>
            <h2>
              In the works and resumes there are contacts of the authors
            </h2>
          </div>
          <div className="resumeSection__avatar">
            <div className="avatar__img">
              <div className='avImg'>
              </div>
              <div className="imgBg">
              </div>
              <img className='secondSecSquare' src="/SecondSecsquare.svg" alt=""/>
            </div>
            <div className="avatar__secondSeactionSocBG">
              <img className='secondSeactionSocBG__img secondSeactionSocBG__img__adaptive' src="/Section2AvaterSoc.svg" alt=""/>
            </div>
            <div className="avatar__buttons">
              <button className='avatar__buttons__create' onClick={() => {
                if (email) {
                  return location.href = `${location.origin}/EditProfile`;
                }

                location.href = `${location.origin}/LogIn`;
              }}>
                Create resumes
              </button>
              <NavLink to={resumes.src}>
                <button className='avatar__buttons__view'>
                  {resumes.name}
                </button>
              </NavLink>
            </div>

          </div>
        </div>
        <div className="resumeSeacrion__Resumes container">
          {loading ?
            <h3>Loading...</h3>
            :
            <>
              {resume[0] && <Resume name={resume[0].name} avatar={resume[0].user_avatar} profession={resume[0].profession} behance={resume[0].behance}
                                    ai={resume[0].ai} telegram={resume[0].telegram} dribble={resume[0].dribble}
                                    facebook={resume[0].facebook} avgPrice={resume[0].price} figma={resume[0].figma}
                                    ps={resume[0].ps} vk={resume[0].vk} user_id={resume[0].user_id}/>}
              {resume[1] && <Resume name={resume[1].name} avatar={resume[1].user_avatar} profession={resume[1].profession} behance={resume[1].behance}
                                    ai={resume[1].ai} telegram={resume[1].telegram} dribble={resume[1].dribble}
                                    facebook={resume[1].facebook} avgPrice={resume[1].price} figma={resume[1].figma}
                                    ps={resume[1].ps} vk={resume[1].vk} user_id={resume[1].user_id}/>}
            </>
          }
        </div>
      </section>

      <div className="gallarySectionBG">
        <section className="gallarySection container">
          <div className="gallaryStar">
            <img src="/GallaryStar.svg" alt=""/>
          </div>
          <div className="gallarySeaction__photo">
            <div className="gallarySeaction__photowr photo1">
              {/* <img src="/Rectangle 56.png" alt="" /> */}
            </div>
            <div className="gallarySeaction__photowr photo2">
              {/* <img src="/Rectangle 55.png" alt="" /> */}
            </div>
            <div className="gallarySeaction__photowr photo3">
              {/* <img src="/Rectangle 54.png" alt="" /> */}
            </div>
          </div>
          <div className="gallarySection__content ">
            <div className="gallarySection__text">
              <h1 className='gallarySeaction__h1'>
                Everyone can post their work Share it don't be shy
              </h1>
              <h2 className='gallarySeaction__h2'>
                Browse other works and get inspired, share your own and inspire others
              </h2>
            </div>
            <div className="gallarySeactionArrow__wrapper">
              <img className='gallarySeactionArrow' src="/GallarySeactionArrow.svg" alt=""/>
            </div>
            <div className="gallarySection__content__buttons">
              <NavLink to={gallery.src}>
                <button className='gallarySection__content__buttons__view'>
                  {gallery.name}
                </button>
              </NavLink>

              <button className='gallarySection__content__buttons__share' onClick={() => {
                if (email) {
                  return location.href = `${location.origin}/AddProjectPage`;
                }
      
                location.href = `${location.origin}/LogIn`;
                }}>
                {addProjectPage.name}
              </button>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

