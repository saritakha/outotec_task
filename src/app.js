import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import FilterForm from './Components/FilterForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      servicerequests: [],
      nonfiltered: []
    }
  }

componentDidMount(){
   this.onLoading()
}

onLoading = () => {
  fetch("http://localhost:5000/api/services")
   .then(res => res.json())
   .then(data =>this.setState({
     servicerequests: data,
     nonfiltered: data
    }))
   }

handleChange = (event) => {
  const SearchStrg = event.target.value;
  let filterList = [];

     if(SearchStrg) {
      this.state.servicerequests.filter( service => {
        if(service.requestName.includes(SearchStrg)){ 
          filterList.push(service);
        }
      })

          if(filterList.length > 0){ 
           this.setState({
            servicerequests:filterList
          })
        }
           else{
            this.setState({
             servicerequests:[]
        })
       }
     } 
     else {
      this.setState({
        servicerequests:this.state.nonfiltered
      })
     }

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

