import {useEffect, useState} from 'react'
import style from './Card.module.css'
import {NavLink} from 'react-router-dom'
import {createClient} from "@supabase/supabase-js";

export const Card = ({id, username, likes, idUser, avatar}) => {
    const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");

    const [count, setCount] = useState(0);
    const projectPage =
        {
            src: '/ProjectPage',
        }

    const userId = localStorage.getItem("id");

    const onLiked = async () => {
        try {
            if (!userId) {
                return location.href = `${location.origin}/LogIn`;
            }

            if (localStorage.getItem(`${id}-work-liked`)) {
                const {data} = await supabase
                    .from('liked_works')
                    .delete()
                    .eq('user_id', userId)
                    .eq('work_id', id);

                const {data: data1} = await supabase
                    .from("works")
                    .update({"count": likes - 1})
                    .eq('id', id);

                setCount(prev => prev - 1);
                return localStorage.removeItem(`${id}-work-liked`);
            }

            const {data: data2} = await supabase
                .from('liked_works')
                .insert({
                    "work_id": id,
                    "user_id": userId
                });

            const {data: data3} = await supabase
                .from("works")
                .update({"count": likes + 1})
                .eq('id', id);

            setCount(prev => prev + 1);
            localStorage.setItem(`${id}-work-liked`, "true");
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setCount(likes);
    }, [likes]);

    return (
        <div className={style.card}>

            <NavLink to={`${projectPage.src}/${id}`} className={style.form__home}>
                <img className={style.card__image} src="/cardImage.png" alt=""/>
            </NavLink>

            <div className={style.card__content}>
                <div className={style.content__author}>
                    <img className={style.author__image} src={avatar} alt=""/>
                    <h1 className={style.author__name}>
                        <NavLink to={`${location.origin}/AccountPage/${idUser}`}>
                            {username}
                        </NavLink>
                    </h1>
                </div>
                <div className={style.content__likes}>
                    <div className={style.likes__count}>
                        {count || 0}
                    </div>
                    <button className={style.likes__button} onClick={() => onLiked(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 14 12" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.65357 2.20008C2.26531 2.70774 2.04805 3.42351 2.04805 4.19054C2.04805 4.96027 2.35039 5.74615 2.86118 6.51933C3.37074 7.29066 4.06221 8.01015 4.77408 8.63304C5.48345 9.25373 6.19593 9.76368 6.73261 10.119C6.95506 10.2663 7.14622 10.3863 7.293 10.4759C7.43978 10.3863 7.63093 10.2663 7.85339 10.119C8.39007 9.76368 9.10255 9.25373 9.81192 8.63304C10.5238 8.01015 11.2153 7.29066 11.7248 6.51933C12.2356 5.74615 12.5379 4.96027 12.5379 4.19054C12.5379 3.42234 12.3221 2.70667 11.9351 2.19956C11.5623 1.71106 11.0141 1.3891 10.2433 1.3891C9.45441 1.3891 8.86025 1.71551 8.45029 2.05765C8.24492 2.22904 8.09077 2.4007 7.98934 2.52767C7.93891 2.5908 7.90236 2.64183 7.87981 2.67477C7.86855 2.6912 7.86086 2.70303 7.85673 2.70948C7.85526 2.71179 7.85369 2.71429 7.85369 2.71429L7.29533 3.64627L6.73352 2.71629C6.73352 2.71629 6.73191 2.71374 6.73039 2.71137C6.7262 2.70486 6.7184 2.69297 6.70703 2.67647C6.68423 2.6434 6.64735 2.59224 6.59654 2.52897C6.49436 2.40171 6.33928 2.22975 6.13315 2.05808C5.72135 1.71512 5.12702 1.3891 4.34272 1.3891C3.57663 1.3891 3.02796 1.71055 2.65357 2.20008ZM7.293 11.2379C6.97492 11.812 6.97458 11.8118 6.97458 11.8118L6.97275 11.8108C6.97275 11.8108 6.97022 11.8094 6.96843 11.8084C6.96485 11.8064 6.95986 11.8036 6.95352 11.8C6.94082 11.7928 6.92268 11.7825 6.89946 11.7691C6.85303 11.7423 6.78624 11.7032 6.70199 11.6526C6.53357 11.5513 6.29495 11.4035 6.00947 11.2144C5.43979 10.8373 4.67713 10.292 3.91135 9.62193C3.14808 8.95407 2.36441 8.14727 1.76762 7.2439C1.17205 6.34238 0.736816 5.30516 0.736816 4.19054C0.736816 3.19572 1.01537 2.18248 1.61259 1.40159C2.22368 0.602567 3.15015 0.0759277 4.34272 0.0759277C5.51707 0.0759277 6.39789 0.570644 6.97156 1.04841C7.0906 1.14756 7.19734 1.24665 7.29183 1.34157C7.38594 1.24677 7.49225 1.14783 7.61085 1.04884C8.18432 0.570251 9.0653 0.0759277 10.2433 0.0759277C11.4393 0.0759277 12.3663 0.602061 12.9769 1.40212C13.5733 2.18355 13.8492 3.1969 13.8492 4.19054C13.8492 5.30516 13.414 6.34238 12.8184 7.2439C12.2216 8.14727 11.4379 8.95407 10.6746 9.62193C9.90887 10.292 9.14621 10.8373 8.57653 11.2144C8.29105 11.4035 8.05243 11.5513 7.88401 11.6526C7.79976 11.7032 7.73297 11.7423 7.68654 11.7691C7.66332 11.7825 7.64518 11.7928 7.63248 11.8C7.62949 11.8017 7.62679 11.8032 7.62441 11.8046C7.62174 11.8061 7.61946 11.8074 7.61757 11.8084C7.61578 11.8094 7.61325 11.8108 7.61325 11.8108L7.61142 11.8118C7.61142 11.8118 7.61108 11.812 7.293 11.2379ZM7.293 11.2379L7.61142 11.8118L7.293 11.9888L6.97458 11.8118L7.293 11.2379Z"
                                  fill={localStorage.getItem(`${id}-work-liked`) ? "red" : "black"} />
                            <path
                                d="M2.04805 4.19054C2.04805 3.42351 2.26531 2.70774 2.65357 2.20008C3.02796 1.71055 3.57663 1.3891 4.34272 1.3891C5.12702 1.3891 5.72135 1.71512 6.13315 2.05808C6.33928 2.22975 6.49436 2.40171 6.59654 2.52897C6.64735 2.59224 6.68423 2.6434 6.70703 2.67647C6.7184 2.69297 6.7262 2.70486 6.73039 2.71137L6.73352 2.71629L7.29533 3.64627L7.85369 2.71429L7.85673 2.70948C7.86086 2.70303 7.86855 2.6912 7.87981 2.67477C7.90236 2.64183 7.93891 2.5908 7.98934 2.52767C8.09077 2.4007 8.24492 2.22904 8.45029 2.05765C8.86025 1.71551 9.45441 1.3891 10.2433 1.3891C11.0141 1.3891 11.5623 1.71106 11.9351 2.19956C12.3221 2.70667 12.5379 3.42234 12.5379 4.19054C12.5379 4.96027 12.2356 5.74615 11.7248 6.51933C11.2153 7.29066 10.5238 8.01015 9.81192 8.63304C9.10255 9.25373 8.39007 9.76368 7.85339 10.119C7.63093 10.2663 7.43978 10.3863 7.293 10.4759C7.14622 10.3863 6.95506 10.2663 6.73261 10.119C6.19593 9.76368 5.48345 9.25373 4.77408 8.63304C4.06221 8.01015 3.37074 7.29066 2.86118 6.51933C2.35039 5.74615 2.04805 4.96027 2.04805 4.19054Z"
                                fill={localStorage.getItem(`${id}-work-liked`) ? "red" : "black"} />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
