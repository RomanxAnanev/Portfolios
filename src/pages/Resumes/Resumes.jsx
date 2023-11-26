import React, {useEffect, useState} from 'react'
import style from './Resumes.module.css'
import {Search} from '../../components/Search/Search'
import {Resume} from '../../components/Resume/Resume'
import {ZeroScroll} from '../../components/ZeroScroll/ZeroScroll'
import {createClient} from "@supabase/supabase-js";

export const Resumes = () => {
    const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
    const email = localStorage.getItem("email");

    const [resumes, setResumes] = useState([]);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");

    const getResumes = async () => {
        try {
            setLoading(true);
            if (title) {
                const {data: titleData} = await supabase
                    .from('resumes')
                    .select('*')
                    .eq("visible", true)
                    .ilike('name', `%${title}%`)
                    .order('created_at', {ascending: false});

                return setResumes(titleData);
            }
            const {data} = await supabase
                .from('resumes')
                .select('*')
                .eq("visible", true);

            setResumes(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    ZeroScroll();

    useEffect(() => {
        (async () => {
            await getResumes();
        })();
    }, [title]);

    return (
        <div className={style.resumes}>
            <div className={style.resumes__func}>
                <Search setTitle={setTitle}/>
                <button className={style.func__button} onClick={() => {
                    if (email) {
                        return location.href = `${location.origin}/EditProfile`;
                    }

                    location.href = `${location.origin}/LogIn`;
                }}>
                    Add resume
                </button>
            </div>
            <div className={style.resumes__resume}>
                {loading ?
                    <h3>Loading...</h3>
                    :
                    !!resumes.length ?
                        resumes.map(resume => (
                            <Resume key={resume.id} avatar={resume.user_avatar} user_id={resume.user_id} facebook={resume.facebook}
                                    dribble={resume.dribble} telegram={resume.telegram} behance={resume.behance}
                                    ai={resume.ai} vk={resume.vk} ps={resume.ps} figma={resume.figma}
                                    avgPrice={resume.price} profession={resume.profession} name={resume.name}/>
                        ))
                        :
                        <h3>По вашему запросу ничего не было найдено</h3>
                }
            </div>
        </div>
    )
}
