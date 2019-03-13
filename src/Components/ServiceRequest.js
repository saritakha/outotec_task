import React from 'react';
import ServiceRequestForm from './ServiceRequestForm';

class ServiceRequest extends React.Component {
    constructor(){
      super();
      this.state={
        isformopen: false
      }

      this.onClick = this.onClick.bind(this);
    }

    onClick(){
      this.setState({
        isformopen: true
      })
    }

    render(){ 
    return(
        <div className="servicerequest">
           <div className= "row">
           <div className= "col col-md-10">
             <div>Service requests</div> Service Center / Service requests
           </div>
           <div className= "col col-md-2">
           <button className="bg-primary text-white"
            onClick={this.onClick} >NEW SERVICE REQUEST</button>
            {this.state.isformopen? <ServiceRequestForm />:null}
           </div>
        </div>
        </div>
    )
}
}
export default ServiceRequest;