import React from 'react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Toaster = () => {
    const toaster=()=>{
        toast("notification",{
          position:toast.POSITION.TOP_CENTER,
          type:'info',
          theme:'colored'
        })
      }
      return (
        <div>
          <button onClick={toaster}>notification</button>
          <ToastContainer className="toasting"/>
        </div>
      )
}

export default Toaster