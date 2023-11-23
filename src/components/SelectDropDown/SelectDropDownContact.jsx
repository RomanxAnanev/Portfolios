import React, { useState } from 'react'
import { Form } from 'react-bootstrap'; 
import './SelectDropDown.css'

export const SelectDropdownContact = ({contacts, setContacts}) => {

    const [select_Contacts, set_Select_Contacts] =  
        useState([]); 
    const [isOpenContacts, setIsOpenContacts] = useState(false); 
    const contact = [ 
        { id: 1, label: 'Vkcontacte' },
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
                        {select_Contacts[0] && <input className='added__input' type="url" value={contacts.vk} onChange={(e) => setContacts({...contacts, vk: e.target.value})} placeholder="Vkcontacte url" />}
                        {select_Contacts[1] && <input className='added__input' type="url" value={contacts.tg} onChange={(e) => setContacts({...contacts, tg: e.target.value})} placeholder="Telegramm url" />}
                        {select_Contacts[2] && <input className='added__input' type="url" value={contacts.fb} onChange={(e) => setContacts({...contacts, fb: e.target.value})} placeholder="Facebook url" />}
                    </ul> 
                </div> 
            </div> 
        </div> 
    ); 
}; 


