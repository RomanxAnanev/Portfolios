import React, { useState } from 'react'
import { Form } from 'react-bootstrap'; 
import './SelectDropDown.css'

export const SelectDropdownContact = () => { 

    const [select_Contacts, set_Select_Contacts] =  
        useState([]); 
    const [isOpenContacts, setIsOpenContacts] = useState(false); 
    const contact = [ 
        { id: 1, label: 'Vkantacte' }, 
        { id: 2, label: 'Telegram' }, 
        { id: 3, label: 'FaceBook' }, 
    ]; 
    const dropDownShow = () => { 
        setIsOpenContacts(!isOpenContacts); 
    }; 
    const courseChange = (event) => { 
        const courseId =  
            parseInt(event.target.value); 
        const choosen = event.target.checked; 
  
        if (choosen) { 
            set_Select_Contacts( 
                [...select_Contacts, courseId]); 
        } else { 
            set_Select_Contacts( 
                select_Contacts.filter((id) =>  
                    id !== courseId)); 
        } 
    }; 
    return ( 
        <div> 
            <h1 className='input__title__url'>Contacts</h1>
            <div className="d-flex justify-content-center"> 
                <div className="custom-dropdown"> 
                    <button 
                        className="optionId"
                        type="button"
                        id="multiSelectDropdown"
                        onClick={dropDownShow} 
                    > 
                        Choose your Contacts
                    </button> 
                    {isOpenContacts && ( 
                        <div className= 
                                {`custom-dropdown-menu  
                                    ${isOpenContacts ? 'show' : ''}`}  
                                aria-labelledby="multiSelectDropdown"> 
                            {contact.map((option) => ( 
                                <Form.Check 
                                    className="custom-checkbox"
                                    key={option.id} 
                                    type="checkbox"
                                    id={`option_${option.id}`} 
                                    label={option.label} 
                                    checked= 
                                        {select_Contacts.includes(option.id)} 
                                    onChange={courseChange} 
                                    value={option.id} 
                                /> 
                            ))} 
                        </div> 
                    )} 
                </div> 
                <div style={{ marginLeft: '20px', width: '50%' }}> 
                    <ul className='added__inputs'> 
                        {select_Contacts.map((optionId) => ( 
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


