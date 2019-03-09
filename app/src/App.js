import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  constructor() 
  {
    super();
      this.state = {
        data: [],
      }

  }
  
  componentDidMount()
  {
    Axios.get('http://localhost:5000/get_channel').
    then(res=>{
      
     this.setState({data:res.data})
    }).
    catch(err=>console.log(err))
  }


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
