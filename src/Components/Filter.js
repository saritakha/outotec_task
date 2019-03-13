import React from 'react';
import {Form, FormGroup} from 'react-bootstrap';

const Filter = () => {
    return(
        <Form className="filter">
        <h6>FILTER</h6>
        <FormGroup>
          <label>Search</label>
          <br/>
           <input 
             type="text"
           />
          <br />
         </FormGroup>
         <FormGroup>
          <label>Request types</label>
          <br/>
          <select
          name="requesttype"
         // value={this.state.requesttype}
         // onChange={this.handleChange}  
        >   
           { <option  className="placeholder" selected disabled value="">Select</option> }
            <option value="audit">Audit</option>
            <option value="maintenance">Maintenance</option>
            <option value="audit">Break/fix Repair</option>
        </select> 
          <br />
         </FormGroup>
        <FormGroup>
          <label> Priority </label>
        <br />  
        <select
          name="priority"
          //value={this.state.priority}
          //onChange={this.handleChange}  
        >   
           { <option  className="placeholder" selected disabled value="">Any</option> }
            <option value="low">Low</option>
            <option value="high">High</option>
        </select> 
        </FormGroup>
        <FormGroup>
          <label>Status</label>
        <br />  
        <select
          name="status"
        //  value={this.state.priority}
         // onChange={this.handleChange}  
        >   
            <option value="Open">Open</option>
            <option value="Close">Close</option>
        </select> 
        </FormGroup>
      </Form>
    )
}

export default Filter;