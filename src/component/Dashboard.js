import React, { Component } from 'react';
import axios from 'axios';
import House from "./House";
import { Link } from 'react-router-dom';



class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      houses: []
    }

    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount() {
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(res => {
      this.setState({
        houses: res.data
      })
    })
  }


  render() {
    const mappedHouses = this.state.houses.map((house) => {
      return (
        <House
        key = {house.id}
        house = {house} 
        delete = {this.deleteHouse}
        />
      )
    })
    return (
      <div>
        Dashboard
        <Link to="/Wizard/step1"><button>Add New Property</button></Link>
        {mappedHouses}
      </div>
    )
  }
}

export default Dashboard