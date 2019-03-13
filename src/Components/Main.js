import React from 'react';
import ServiceRequest from './ServiceRequest';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            servicerequests: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/services")
        .then(res => res.json())
        .then(data =>{
          let services = data.map(service =>{
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
         this.setState({servicerequests:services})
        })
    }

    componentDidUpdate(){
        fetch("http://localhost:5000/api/services")
        .then(res => res.json())
        .then(data =>{
          let services = data.map(service =>{
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
         this.setState({servicerequests:services})
        })
    }


    render(){
        return(
            <div>
            <ServiceRequest/> 
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
              {this.state.servicerequests}
               
              </tbody>
         </table>
            </div>
        )
    }
}

export default Main;