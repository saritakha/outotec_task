import React from 'react';
import {Form, FormGroup} from 'react-bootstrap';
import axios from 'axios';

class ServiceRequestForm extends React.Component{
    constructor(){
        super();
        this.state = {
          requestName:"",
          requestType:"",
          id:"",
          description:"",
          priority:"",
          status:"open",
          isformopen: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event){
        const {name, value } =  event.target;
        this.setState({[name]:value})
    } 

    onClick(){
      this.setState({
        isformopen: false
      })
    }

     onSubmit(e){
      e.preventDefault();
      // get our form data out of state
      const { requestName, requestType, id,description,priority ,status} = this.state;

      axios.post(`http://localhost:5000/api/services`, { requestName, requestType, id,description,priority,status })
        .then((result) => {
          alert('data posted')
        });
     }

    render(){
       return(
           <Form className="modalForm" onSubmit={this.onSubmit}  >
             <p>CREATE NEW SERVICE REQUEST</p>
              <FormGroup>
               <label>Request name* </label>
               <br/>
               <input
               type="text"
               placeholder="Type"
               name="requestName"
               value={this.state.requestName}
               onChange={this.handleChange} 
               required 
             />
               <br />
              </FormGroup>
              <FormGroup>
                <label>Request Type*</label>
               <br/>
                 <select
               name="requestType"
               value={this.state.requestType}
               onChange={this.handleChange}  
             >   
                <option  className="placeholder" selected disabled value="">Select</option> 
                 <option value="audit">Audit</option>
                 <option value="maintenance">Maintenance</option>
                 <option value="audit">Break/fix Repair</option>
             </select> 
             </FormGroup>
             <FormGroup>
               <label>ID</label>
               <br/>
               <input
               type="text"
               placeholder="Type"
               name="id"
               value={this.state.id}
               onChange={this.handleChange}  
               required
             />
             <br />
             </FormGroup>
             <FormGroup>
               <label> Description </label> 
               <br/>
               <textarea
               placeholder="Type"
               name="description"
               value={this.state.description}
               onChange={this.handleChange}  
             ></textarea>
             <br />
             </FormGroup>
             <FormGroup>
               <label>  Priority  </label>
             <br />  
             <select
               name="priority"
               value={this.state.priority}
               onChange={this.handleChange}  
             >   
                { <option  className="placeholder"  disabled value="">Select</option> }
                 <option value="low">Low</option>
                 <option value="high">High</option>
             </select> 
             </FormGroup>
             <button type="submit">Send</button>
             <button onClick={this.onClick}>Cancel</button>
             {this.state.isformopen?null:'cannot cancel'}
           </Form>
       )
    }
}

export default ServiceRequestForm;