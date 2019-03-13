import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import FilterForm from './Components/FilterForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      servicerequests: []
    }
  }

componentDidMount(){
   fetch("http://localhost:5000/api/services")
   .then(res => res.json())
   .then(data =>this.onLoading(data));
}

onLoading = (data) => {
   this.setState({servicerequests:data})
   }

// componentDidUpdate(){
//     fetch("http://localhost:5000/api/services")
//     .then(res => res.json())
//     .then(data =>this.onLoading(data));
//  }

handleChange = (event) => {
  const SearchStr = event.target.value
  const requests = [...this.state.servicerequests]
  const filterList = [];
  
   requests.filter( service => {
   if( service.requestName.includes(SearchStr)){
     filterList.push(service);
   }
  })
   console.log(filterList);
   console.log(filterList.length); 

   if(filterList.length>=0 && SearchStr!= null){
     <Main  servicerequests = {filterList}/>
   }
   else if(SearchStr== null){
    <Main  servicerequests = {requests}/>
   }

  //  if(filterList.length>=0 && SearchStr!= null){
  //   this.setState({
  //       servicerequests:filterList
  //   })
  // }
  // else if(SearchStr== null){
  //  this.setState({
  //    servicerequests:requests
  //  })
  // }
} 
       
  render() {
    return (
      <div className="App">
        <Header />
        <div className= "row">
           <div className= "col col-md-2">
             <FilterForm handleChange= {this.handleChange}/>
           </div>
           <div className= "col col-md-10 main">
             <Main  servicerequests= {this.state.servicerequests}/>
           </div>
        </div>
      </div>
    );
  } 

  
}


export default App;

