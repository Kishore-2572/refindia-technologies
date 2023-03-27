import React from 'react'
import '../css/loadingspinner.css';

const LoadingSpinner = () => {
  return (
    <div className="container">     
  	<div className="spin">
			<div className="spinner-1 spinner-11    spinner-12  spinner-13">
				 <div className="spinner"></div>
				 <div className="spinner1"></div>
				 <div className="spinner2"></div>
			 	 <div className="spinner3"></div>
			</div>
		</div>
	</div> 
  )
}

export default LoadingSpinner