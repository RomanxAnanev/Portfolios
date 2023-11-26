import {useEffect, useState} from 'react'
import style from './AddProjectPage.module.css'
import {GoBackButton} from '../../components/GoBackButton/GoBackButton'
import {ZeroScroll} from '../../components/ZeroScroll/ZeroScroll'
import {createClient} from "@supabase/supabase-js";

export const AddProjectPage = () => {
    const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
    const email = localStorage.getItem("email");
    const id = localStorage.getItem("id");
    const [work, setWork] = useState({
        name: "",
        direction: "",
        description: "",
        profession: "",
        url: "",
    });
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userProfession, setUserProfession] = useState("");

    ZeroScroll();

    const onSubmit = async () => {
        try {
            const {data: data1} = await supabase
                .from('works')
                .insert({
                    user_id: id,
                    name: work.name,
                    description: work.description,
                    direction: work.direction,
                    url: work.url,
                    profession: userProfession,
                    username: username,
                    user_avatar: avatar
                });

            location.href = `${location.origin}/Gallery`;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        (async () => {
            const {data} = await supabase
                .from("users")
                .select("*")
                .eq("email", email);

            setUserProfession(data[0].profession);
            setUsername(data[0].name);
            setAvatar(data[0].avatar);
        })();
    }, []);

    return (
        <div className={style.addProjectPage}>

            <GoBackButton/>

            <div className={style.addProjectPage__content}>
                <img className={style.project__img} src="/AccountImage.png" alt=""/>
                <label className={style.inputs} htmlFor="">
                    <h1 className={style.input__title}>Project name</h1>
                    <input type="text" value={work.name} onChange={(e) => setWork({...work, name: e.target.value})}/>
                    <h1 className={style.input__title}>Direction</h1>
                    <input type="text" value={work.direction}
                           onChange={(e) => setWork({...work, direction: e.target.value})}/>
                    <h1 className={style.input__title}>Description</h1>
                    <input type="text" value={work.description}
                           onChange={(e) => setWork({...work, description: e.target.value})}/>
                </label>
            </div>
            <label className={style.url} htmlFor="">
                <h1 className={style.input__title__url}>Url to your project</h1>
                <input className={style.input__url} type="url" value={work.url}
                       onChange={(e) => setWork({...work, url: e.target.value})}/>
                <button className={style.button} type='button' onClick={() => onSubmit()}>Confirm</button>
            </label>
        </div>
    )
}
