import React, { useState } from 'react'
import { Form } from 'react-bootstrap'; 
import './SelectDropDown.css'

export const SelectDropdownStack = ({stackValue, setStack, figma, ps, ai}) => { 

    const [select_Courses, set_Select_Courses] =  
        useState([]); 
    const [isOpen, setIsOpen] = useState(false); 
    const stack = [ 
        { id: 6, label: 'Figma'}, 
        { id: 7, label: 'PS' }, 
        { id: 8, label: 'AI' },   
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
            <h1 className='input__title__url'>Stack</h1>
            <div className="d-flex justify-content-center"> 
                <div className="custom-dropdown"> 
                    <button 
                        className="optionId"
                        type="button"
                        id="multiSelectDropdown"
                        onClick={dropDownShow} 
                    > 
                        Choose your Stack
                    </button> 
                    {isOpen && ( 
                        <div className= 
                                {`custom-dropdown-menu  
                                    ${isOpen ? 'show' : ''}`}  
                                aria-labelledby="multiSelectDropdown"> 
                            {stack.map((option) => ( 
                                <Form.Check 
                                    className="custom-checkbox"
                                    key={option.id} 
                                    type="checkbox"
                                    id={`option_${option.id}`} 
                                    label={option.label} 
                                    checked= 
                                        {select_Courses.includes(option.id)} 
                                    onChange={courseChange} 
                                    value={option.id} 
                                /> 
                            ))} 
                        </div> 
                    )} 
                </div> 
                <div style={{ marginLeft: '20px', width: '50%' }}> 
                    <ul className='added__inputs'> 
                    {select_Courses[0] && <input className='added__input' type="url" value={stackValue.figma || figma} onChange={(e) => setStack({...stackValue, figma: e.target.value})} placeholder={`${stack[0].label} url`} />}
                        {select_Courses[1] && <input className='added__input' type="url" value={stackValue.ps || ps} onChange={(e) => setStack({...stackValue, ps: e.target.value})} placeholder={`${stack[1].label} url`} />}
                        {select_Courses[2] && <input className='added__input' type="url" value={stackValue.ai || ai} onChange={(e) => setStack({...stackValue, ai: e.target.value})} placeholder={`${stack[2].label} url`} />}
                    </ul> 
                </div> 
            </div> 
        </div> 
    ); 
}; 


