import {useEffect, useState} from 'react'
import style from './Gallery.module.css'
import {Search} from '../../components/Search/Search'
import {Card} from '../../components/Card/Card'
import {ZeroScroll} from '../../components/ZeroScroll/ZeroScroll'
import {createClient} from "@supabase/supabase-js";


export const Gallery = () => {
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
  const email = localStorage.getItem("email");
  const [works, setWorks] = useState([]);
  const [title, setTitle] = useState([]);
  const [loading, setLoading] = useState(false);

  ZeroScroll()

  const getWorks = async () => {
    try {
      if (title) {
        setLoading(true);
        const {data} = await supabase
          .from('works')
          .select('*')
          .ilike('username', `%${title}%`)
          .order('created_at', {ascending: false});

        return setWorks(data);
      }

      setLoading(true);
      const {data} = await supabase
        .from('works')
        .select('*');

      setWorks(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const addProjectPage = {
    name: 'Add work',
    src: '/AddProjectPage',
  }

  useEffect(() => {
    (async () => {
      await getWorks();
    })();
  }, [title]);

  return (
    <div className={style.bg}>
      <div className={style.gallery}>
        <div className={style.gallary__func}>
          <Search setTitle={setTitle}/>

          <button className={style.func__button} onClick={() => {
            if (email) {
              return location.href = `${location.origin}/AddProjectPage`;
            }

            location.href = `${location.origin}/LogIn`;
          }}>
            {addProjectPage.name}
          </button>

        </div>
        <div className={style.gallery__projects}>
          {loading ?
            <h3>Loading...</h3>
            :
            !!works.length ?
              works.map(work => (
                <Card key={work.id} id={work.id} idUser={work.user_id} username={work.username} likes={work.count}/>
              ))
              :
              <h3>Not found</h3>
          }
        </div>
      </div>
    </div>
  )
}
