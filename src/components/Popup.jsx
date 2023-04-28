import React, { useState } from 'react'
import '../css/popup.css'
import {AiFillCloseSquare} from 'react-icons/ai'
const Popup = (props) => {
  const[issubmit,setIsSubmit]=useState(false)
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-button' onClick={()=>props.setTrigger(false)}>
              <AiFillCloseSquare/>
            </button>
            {!issubmit?(<>
              <p>Are you Looking for Sell your Products</p>
            <form action="">
              <div className='request-form'>
              <input type="text" name="name" id="" placeholder='your name'/>
              <input type="text" name="email" id="" placeholder='your email'/>
              <input type="text" name="phone" id="" placeholder='your phone' minLength="8" maxLength="20"/>
              <div>
              <label>Select the Plant: </label>
              <select name="plants">
                <option value="milk">Milk</option>
                <option value="curd">Curd</option>
                <option value="panner">Paneer</option>
                <option value="yogurt">Yogurt</option>
              </select>
              </div>
              <textarea name="" id="" cols="20" rows="5" placeholder='your message'></textarea>
              </div>
              <button onClick={()=>setIsSubmit(true)}>submit</button>
            </form></>):(<div>
              Thank you Our Team Reach you Soon.
            </div>)}
            
        </div>
    </div>
  ):"";
}

export default Popup