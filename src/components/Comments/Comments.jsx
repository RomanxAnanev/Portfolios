import React from 'react'
import style from './Comments.module.css'

export const Comments = () => {
  return (
    <div className={style.comments}>
        <h1 className={style.title}>Feedback</h1>
        <form className={style.form_comments} action="">
            <textarea spellcheck="false" className={style.form_textarea} name="comment" placeholder='What do think about the project?' id="comment"></textarea>
            <button className={style.button} type='submit'>Comment</button>
        </form>
        <div className={style.comment}>
            <div className={style.comment_img}>
                <img src="/avatarBlue.png" alt="" />
            </div>
            <div className={style.comment_text}>
                <div className={style.text_title}>
                    <div className={style.text_name}>
                        Alexey Kuznetsov
                    </div> 
                    <div className={style.text_point}>
                        <img src="/point.svg" alt="" />
                    </div> 
                    <div className={style.text_date}>
                        12 may 2024
                    </div> 
                </div>
                <p className={style.text_description}>Awesome project!</p>
            </div>
        </div>
    </div>
  )
}
