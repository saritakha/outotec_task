import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
         filterData: ""
      }
    }

  componentDidMount(){
    setTimeout(() => {
      this.setState({filterData: "Search"})
    },1000)
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <div className= "row">
           <div className= "col col-md-2">
             <Filter />
           </div>
           <div className= "col col-md-10 main">
             <Main />
           </div>
        </div>
      </div>
    );
  }
}

export default App;

