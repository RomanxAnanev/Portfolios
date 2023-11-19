import React, { useState } from 'react'
import { Form } from 'react-bootstrap'; 
import './SelectDropDown.css'

export const SelectDropdownStack = () => { 

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
                        {select_Courses.map((optionId) => ( 
                            // <li key={optionId}> 
                            //     {courses.find(option =>  
                            //         option.id === optionId)?.label} 
                            // </li> 
                            <input className='added__input' type="url" key={optionId} placeholder='url' />
                            
                        ))} 
                    </ul> 
                </div> 
            </div> 
        </div> 
    ); 
}; 


