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
      SearchStr:'',
      filterList:[],
    }
  }

componentDidMount(){
   fetch("http://localhost:5000/api/services")
   .then(res => res.json())
   .then(this.onLoading);
}

componentDidUpdate(){
   fetch("http://localhost:5000/api/services")
   .then(res => res.json())
   .then(this.onLoading);
}

onLoading = (data) => {
   this.setState({servicerequests:data})
   }

handleChange = (event) => {
    this.setState({SearchStr: event.target.value})
    this.state.servicerequests.filter(service => 
      service.requestName.includes(this.state.SearchStr)).map(service =>
       { this.state.filterList.push(service)})
     {<Main  servicerequests= {this.state.filterList}/>}
}    


  render() {
    return (
      <div className="App">
        <Header />
        <div className= "row">
           <div className= "col col-md-2">
             <FilterForm handleChange={this.handleChange}/>
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

