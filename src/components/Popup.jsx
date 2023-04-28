import React from 'react'
import '../css/popup.css'
const Popup = (props) => {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-button' onClick={()=>props.setTrigger(false)}>
            <i className="fa-solid fa-circle-xmark"></i>
            </button>
            {/* {props.childern} */}
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
              <button>submit</button>
            </form>
        </div>
    </div>
  ):"";
}

export default Popup