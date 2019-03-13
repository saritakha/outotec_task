import React from 'react';

const ServiceRequest = (props) =>{
      return(
        <div className="servicerequest">
          <div className= "row">
           <div className= "col col-md-10">
              <span className="large">Service requests</span>Service Center / Service requests
           </div>
           <div className= "col col-md-2">
           <button className="bg-primary text-white"
            onClick={props.open} >NEW SERVICE REQUEST</button>
           </div>
         </div>
        </div>
    )
}

export default ServiceRequest;