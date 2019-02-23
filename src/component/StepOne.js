import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { changeName, changeAddress, changeCity, changeState, changeZipcode } from './../ducks/reducer.js'


class Stepone extends Component {
  
  render() {
    const { changeName, changeAddress, changeCity, changeState, changeZipcode } = this.props;
    return (
      <div>
        Wizard
        <input 
          onChange={e => changeName(e.target.value)}
          placeholder='Name'
        />
        <input 
          onChange={e => changeAddress(e.target.value)}
          placeholder='Address'
        />
        <input 
          onChange={e => changeCity(e.target.value)}
          placeholder='City'
        />
        <input 
          onChange={e => changeState(e.target.value)}
          placeholder='State'
        />
        <input 
          onChange={e => changeZipcode(e.target.value)}
          placeholder='Zipcode'
        />
        <Link to="wizard/step2"><button >Next</button></Link>
       
        
      </div>
    )
  }
}

const{name, address, city, state, zipcode} = this.state
function mapStateToProps(state){
  return{
    name,
    address,
    city,
    state,
    zipcode
  }
}

export default connect(mapStateToProps, { changeName, changeAddress, changeCity, changeState, changeZipcode })(Stepone)