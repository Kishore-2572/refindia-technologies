import React from 'react'
import '../css/QuatationFrom.css'
import Popup from './Popup';
import { useState,useEffect } from 'react';
import {FiMessageSquare} from 'react-icons/fi'
const QuatationForm = () => {
    const[buttonpopup,setButtonpopup]=useState(false);
    const[timepopup,setTimepopup]=useState(false); 
    useEffect(()=>{
        setTimeout(()=>{
            setTimepopup(true)
        },3000)
    },[])
  return (
    <div className='form-popup'>
        <div className='form-customer'>
            <button onClick={()=>setButtonpopup(true)}>
                <FiMessageSquare/>
                
            </button>
            <Popup trigger={buttonpopup} setTrigger={setButtonpopup}>
            </Popup>
            <Popup trigger={timepopup} setTrigger={setTimepopup}>
            </Popup>
        </div>
    </div>
  )
}

export default QuatationForm;