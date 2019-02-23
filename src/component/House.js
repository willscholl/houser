import React from 'react';
// import axios from 'axios';

export default function House(props) {
  const { name, address, city, state, zipcode } = props.house
    return(
      <div>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zipcode: {zipcode}</p>
        <button onClick={() => props.delete(props.house.id)}>Delete</button>
      </div>
    )
}