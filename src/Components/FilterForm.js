import React from 'react';
import {Form, FormGroup} from 'react-bootstrap';


const FilterForm = (props) => {
    return(
        <Form className="filter">
          <h5>FILTER</h5>
        <FormGroup>
          <label>Search</label><br/>
           <input  type="text" onChange={props.handleChange}/><br />
        </FormGroup>
        <FormGroup>
          <label>Request types</label><br/>
           <select name="requesttype">   
            <option  className="placeholder" selected disabled value="">Select</option> 
            <option value="audit">Audit</option>
            <option value="maintenance">Maintenance</option>
            <option value="audit">Break/fix Repair</option>
           </select><br />
        </FormGroup>
        <FormGroup>
          <label> Priority </label><br />  
           <select name="priority">   
            <option  className="placeholder" selected disabled value="">Any</option> 
            <option value="low">Low</option>
            <option value="high">High</option>
           </select> 
        </FormGroup>
        <FormGroup>
          <label>Status</label><br />  
           <select name="status" >   
            <option value="Open">Open</option>
            <option value="Close">Close</option>
           </select> 
        </FormGroup>
      </Form>
    )
  }

export default FilterForm;