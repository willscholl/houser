import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Steptwo extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    }
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

  render() {
    return (
      <div>
      <Link to="wizard/step3">Finish</Link>
      </div>
    )}
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

export default Steptwo