import {useEffect, useState} from 'react'
import style from './Comments.module.css'
import {createClient} from "@supabase/supabase-js";
import {Link} from "react-router-dom";

export const Comments = ({itemId}) => {
  const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
  const [commentText, setCommentText] = useState();
  const [user, setUser] = useState(null);
  const [commentData, setCommentsData] = useState([])
  const idUser = localStorage.getItem("id");
  const getUserData = async (id) =>{
    try {
      const {data: userData} = await supabase
        .from("users")
        .select("*")
        .eq("id", id);
      setUser(userData[0])
      } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getUserData(idUser);
    (async () => {
      const {data} = await supabase
        .from("comments")
        .select(`*`)
        .eq("post_id", itemId)
        console.log(data)
        setCommentsData(data)
    })();
  }, []);
  const handleAddComment = async (e) => {
    e.preventDefault()
    if(itemId && idUser && commentText) {
      try {
        const { data, error } = await supabase
          .from('comments')
          .insert([
            { post_id: itemId, user_id: idUser, message:  commentText, user_name: user.name},
          ])
        window.location.reload()
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <div className={style.comments}>
        <h1 className={style.title}>Feedback</h1>
        <form className={style.form_comments}>
            <textarea spellCheck="false" className={style.form_textarea} name="comment" placeholder='What do think about the project?' id="comment"
                      value={commentText}
                      onChange={(e)=>setCommentText(e.target.value)}></textarea>
            <button className={style.button} onClick={handleAddComment}>Comment</button>
        </form>
        {commentData?.map((item)=>(
            <div className={style.comment} key={item.id}>
              <div className={style.comment_img}>
                <img src="/avatarBlue.png" alt="" />
              </div>
              <div className={style.comment_text}>
                <div className={style.text_title}>
                  <Link to={`${location.origin}/AccountPage/${item.user_id}`}>
                    <div className={style.text_name}>
                      {item.user_name}
                    </div>
                  </Link>
                  <div className={style.text_point}>
                    <img src="/point.svg" alt="" />
                  </div>
                  <div className={style.text_date}>
                    {new Date(item.created_at).toLocaleString()}
                  </div>
                </div>
                <p className={style.text_description}>{item.message}</p>
              </div>
            </div>
        ))}
    </div>
  )
}
