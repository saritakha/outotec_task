import React from 'react';
import ServiceRequest from './ServiceRequest';
import ServiceRequestForm from './ServiceRequestForm';

class Main extends React.Component {
    constructor() {
        super();
        this.state= {
            isFormOpen: false
        }
    }

    handleForm= () => {
            this.setState({
              isFormOpen: !this.state.isFormOpen
            });      
        }

    render(){
       const { servicerequests } = this.props;

       return servicerequests ? this.renderData(servicerequests) : this.renderLoading
    }

    renderData = (data) =>{
        return(
            <div>
            <ServiceRequest open={this.handleForm}/> 

              {this.state.isFormOpen? <ServiceRequestForm  close={this.handleForm}/>:null}

            <table>
              <tbody>
                <tr>
                    <th>created</th>
                    <th>Request name</th>
                    <th>Request type</th>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
            {data.map(service =>{
                  return(
                   <tr key={service.id}>
                     <td>{service.date}</td>
                     <td>{service.requestName}</td>
                     <td>{service.requestType}</td>
                     <td>{service.id}</td>
                     <td>{service.description}</td>
                     <td>{service.priority}</td>
                     <td>{service.status}</td>
                   </tr>
                         ) 
                        })
        }
               
              </tbody>
         </table>
     </div>
        )
    }

    renderLoading = () => {
        <h1>loading........</h1>
    }
}


export default Main;