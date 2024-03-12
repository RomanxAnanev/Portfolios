import React, { useState } from 'react'
import { Form } from 'react-bootstrap'; 
import './SelectDropDown.css'

export const SelectDropdownProject = ({projects, setProjects}) => {

    const [select_Courses, set_Select_Courses] =  
        useState([]); 
    const [isOpen, setIsOpen] = useState(false); 
    const project = [ 
        { id: 4, label: 'Dribble' }, 
        { id: 5, label: 'Behance' },  
    ]; 
    const dropDownShow = () => { 
        setIsOpen(!isOpen); 
    }; 
    const courseChange = (event) => { 
        const courseId =  
            parseInt(event.target.value); 
        const choosen = event.target.checked; 
  
        if (choosen) { 
            set_Select_Courses( 
                [...select_Courses, courseId]); 
        } else { 
            set_Select_Courses( 
                select_Courses.filter((id) =>  
                    id !== courseId)); 
        } 
    }; 
    return ( 
        <div> 
            <h1 className='input__title__url'>Projects</h1>
            <div className="d-flex justify-content-center"> 
                <div className="custom-dropdown flex flex-col gap-y-2"> 
                    <button 
                        className="optionId"
                        type="button"
                        id="multiSelectDropdown"
                        onClick={dropDownShow} 
                    > 
                        Choose where your Projects
                    </button> 
                    {isOpen && ( 
                        <div className= 
                                {`custom-dropdown-menu  
                                    ${isOpen ? 'show' : ''}`}  
                                aria-labelledby="multiSelectDropdown"> 
                            {project.map((option) => ( 
                                <Form.Check 
                                    className="custom-checkbox"
                                    key={option.id} 
                                    type="checkbox"
                                    id={`option_${option.id}`} 
                                    label={option.label} 
                                    checked= {select_Courses.includes(option.id)} 
                                    onChange={courseChange} 
                                    value={option.id} 
                                /> 
                            ))} 
                        </div> 
                    )} 
                </div> 
                <div style={{ marginLeft: '20px', width: '50%' }}> 
                    <ul className='added__inputs'> 
                    {/* {select_Courses[0] && <input className='added__input' type="url" value={projects.dribble} onChange={(e) => setProjects({...projects, dribble: e.target.value})} placeholder={`${project[0].label} url`} />}
                    {select_Courses[1] && <input className='added__input' type="url" value={projects.behance} onChange={(e) => setProjects({...projects, behance: e.target.value})} placeholder={`${project[1].label} url`} />} */}
                    {!!select_Courses.find(item => item === project[0].id) && <input className='added__input' type="url" value={projects.dribble} onChange={(e) => setProjects({...projects, dribble: e.target.value})} placeholder="Dribble url" />}
                    {!!select_Courses.find(item => item === project[1].id) && <input className='added__input' type="url" value={projects.behance} onChange={(e) => setProjects({...projects, behance: e.target.value})} placeholder="Behance url" />}
                    </ul> 
                </div> 
            </div> 
        </div> 
    ); 
}; 


