import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Stepthree extends Component {
  constructor() {
    super()
  }

  postHouse() {
    const { name, address, city, state, zipcode } = this.state
    axios.post('/api/house', {name, address, city, state, zipcode}).then(res => {
      this.setState({
        name: res.data,
        address: res.data,
        city: res.data,
        state: res.data,
        zipcode: res.data
      });
      this.props.history.push('/')
    });
  }

  // handleName(val) {
  //   this.setState({
  //     name: val
  //   })
  // }

  // handleAddress(val) {
  //   this.setState({
  //     address: val
  //   })
  // }
  // handleCity(val) {
  //   this.setState({
  //     city: val
  //   })
  // }

  // handleState(val) {
  //   this.setState({
  //     state: val
  //   })
  // }

  // handleZip(val) {
  //   this.setState({
  //     zipcode: val
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       Wizard
  //       <input 
  //         value={this.state.name}
  //         onChange={e => this.handleName(e.target.value)}
  //         placeholder='Name'
  //       />
  //       <input 
  //         value={this.state.address}
  //         onChange={e => this.handleAddress(e.target.value)}
  //         placeholder='Address'
  //       />
  //       <input 
  //         value={this.state.city}
  //         onChange={e => this.handleCity(e.target.value)}
  //         placeholder='City'
  //       />
  //       <input 
  //         value={this.state.state}
  //         onChange={e => this.handleState(e.target.value)}
  //         placeholder='State'
  //       />
  //       <input 
  //         value={this.state.zipcode}
  //         onChange={e => this.handleZip(e.target.value)}
  //         placeholder='Zipcode'
  //       />
  //       <button onClick={() => this.postHouse()}>Create</button>
        
  //     </div>
  //   )
  // }
}

export default Stepthree