import React, { Component } from 'react';
// import logo from './logo.svg';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  // class App extends React.Component {
  constructor() {
    super();
    this.state = {
       paintings: [],
       searchField: ''
      // paintings: [
      //   {
      //     name: 'Prof. Shafiei',
      //     id: '1'
      //   },
      //    {
      //     name: 'Prof. Hesabi',
      //     id: '2'
      //   },
      //    {
      //     name: 'Dr. Nafisi',
      //     id: '3'
      //   }
      // ]
    };
    // this.handleChange = this.handleChange.bind(this); when you call a method without arrow
  }

// life cycle method - componentDidMount is the befit of having class
  componentDidMount(){
    // Make an API request to that URL
    fetch('https://jsonplaceholder.typicode.com/users')
    // returen us a Promises - taking a response and converting it to json
    .then(response => response.json())
    // console.log(users)
    .then(users => this.setState({paintings: users}))
    
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }


  render() {
    // use the property name as constant
    const { paintings, searchField } = this.state;
    const filterPaintings = paintings.filter(painting =>
      painting.name.toLowerCase().includes(searchField.toLowerCase())
      // includes: like arrays return true or false
      )
    return (
      //jsx syntax
      <div className="App">
      {/* onChange: whenever the input does change */}
        <h1>Hamideh's paintings</h1>
        <SearchBox 
          placeholder='search paintings'
          handleChange={this.handleChange}
        />
        <CardList paintings={filterPaintings} /> 
        
      </div>
    )
  }
}

export default App;
