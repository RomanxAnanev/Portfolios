import React, {useEffect, useState} from 'react'
import style from './EditProfile.module.css'
import {GoBackButton} from '../../components/GoBackButton/GoBackButton'
import {SelectDropdownContact} from "../../components/SelectDropDown/SelectDropDownContact";
import {SelectDropdownProject} from "../../components/SelectDropDown/SelectDropDownProject";
import {SelectDropdownStack} from "../../components/SelectDropDown/SelectDropDownStack";
import {createClient} from '@supabase/supabase-js';
import {Resume} from '../../components/Resume/Resume';

export const EditProfile = () => {
    const supabase = createClient('https://ndnfqgznxmxuserdlhhl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbmZxZ3pueG14dXNlcmRsaGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MDQwNjUsImV4cCI6MjAxNTk4MDA2NX0.XBHCk_KnwRYLHRGt3jqjdVrls5Y6x3Z-nX9YL4zIaAs");
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [description, setDescription] = useState("");
    const [avgPrice, setAvgPrice] = useState(0);

    const [contacts, setContacts] = useState({vk: null, tg: null, fb: null})
    const [projects, setProjects] = useState({dribble: null, behance: null})
    const [stack, setStack] = useState({figma: null, ps: null, ai: null})

    const email = localStorage.getItem("email")
    const id = localStorage.getItem("id");

    const onSubmit = async () => {
        const {data} = await supabase
            .from('users')
            .update({
                name: name,
                description: description,
                profession: profession,
                vk: contacts.vk,
                telegram: contacts.tg,
                facebook: contacts.fb,
                dribble: projects.dribble,
                behance: projects.behance,
                figma: stack.figma,
                ps: stack.ps,
                ai: stack.ai,
                price: +avgPrice
            })
            .eq('email', email);

        location.href = `${location.origin}/AccountPage/${id}`
    };

    const patchResume = async () => {
        const {data} = await supabase
            .from('resumes')
            .update({
                name: name,
                description: description,
                profession: profession,
                vk: contacts.vk,
                telegram: contacts.tg,
                facebook: contacts.fb,
                dribble: projects.dribble,
                behance: projects.behance,
                figma: stack.figma,
                ps: stack.ps,
                ai: stack.ai,
                price: +avgPrice,
                visible: true
            })
            .eq('email', email);

        const {data: userData} = await supabase
            .from('users')
            .update({price: avgPrice})
            .eq('email', email);

        location.href = `${location.origin}/Resumes`;
    };

    useEffect(() => {
        (async () => {
            const {data, error} = await supabase
                .from('users')
                .select('*')
                .eq("email", email);

            setUser(data[0]);
            setName(data[0].name)
            setDescription(data[0].description)
            setProfession(data[0].profession)
            setAvgPrice(data[0].price)
            setContacts({vk: data[0].vk, tg: data[0].telegram, fb: data[0].facebook})
            setProjects({dribble: data[0].dribble, behance: data[0].behance})
            setStack({figma: data[0].figma, ps: data[0].ps, ai: data[0].ai})
        })()
    }, [])

    return (
        <div className={style.editProfile}>

            <GoBackButton/>

            <div className={style.editProfile__content}>
                <img className={style.profile__img} src="/AccountImage.png" alt=""/>
                <label className={style.inputs} htmlFor="">
                    <h1 className={style.input__title}>Name</h1>
                    {user && <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>}
                    <h1 className={style.input__title}>Profession</h1>
                    {user &&
                        <input type="text" onChange={(e) => setProfession(e.target.value)} value={profession}/>}
                    <h1 className={style.input__title}>Descriptoin</h1>
                    {user && <input type="text" onChange={(e) => setDescription(e.target.value)}
                                    value={description}/>}
                </label>
            </div>
            <label className={style.services} htmlFor="">
                <div className={style.service__inputs}>
                    {user && (
                        <>
                            <div className={style.service}>
                                <SelectDropdownContact contacts={contacts}
                                                       setContacts={setContacts}/>
                            </div>
                            <div className={style.service}>
                                <SelectDropdownProject projects={projects}
                                                       setProjects={setProjects}/>
                            </div>
                            <div className={style.service}>
                                <SelectDropdownStack stackValue={stack}
                                                     setStack={setStack}/>
                            </div>
                        </>
                    )}
                </div>
                <button className={style.button} type='button' onClick={onSubmit}>Confirm</button>
            </label>
            <div className={style.resume}>
                <h1 className={style.resume__h1}>Your resume:</h1>
                <div className={style.resume__content}>
                    <Resume name={name} avgPrice={avgPrice} profession={profession} vk={contacts.vk} ai={stack.ai}
                            dribble={projects.dribble} behance={projects.behance} figma={stack.figma} ps={stack.ps}
                            telegram={contacts.tg} facebook={contacts.fb}/>
                    <div className={style.content__resumText}>
                        <p>The resume card is generated automatically, it remains only to enter the average cost of your
                            service and
                            click publish. You can also publish a resume card on the resumes page</p>
                        <h2 className={style.resume__h2}>Average price:</h2>
                        <label className={style.resume__label} htmlFor="">
                            <input className={style.resume__label__input} maxLength={4} value={avgPrice}
                                   onChange={(e) => setAvgPrice(e.target.value)} type="text"/>
                            <div className={style.valute}>$</div>
                            <div className={style.fromTo}>From $1 to $9999</div>
                            <button className={style.resume__label__button} type='button' onClick={patchResume}>Add
                                resume
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
