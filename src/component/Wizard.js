import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'


class Wizard extends Component {
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

  render() {
    return (
      <div>
        <Route path="wizard/step1" exact component={StepOne} />
        <Route path="wizard/step2" exact component={StepTwo} />
        <Route path="wizard/step3" exact component={StepThree} />
        <Link to="/"><button>Cancel</button></Link>
      </div>
    )
  }
}

export default Wizard