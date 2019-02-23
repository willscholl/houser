const initState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: 0
};

const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_ADDRESS = 'CHANGE_ADDRESS'
const CHANGE_CITY = 'CHANGE_CITY'
const CHANGE_STATE = 'CHANGE_STATE'
const CHANGE_ZIPCODE = 'CHANGE_ZIPCODE'



export default function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_NAME: return Object.assign({}, state, { name: action.payload }); 
    case CHANGE_ADDRESS: return Object.assign({}, state, { address: action.payload }); 
    case CHANGE_CITY: return Object.assign({}, state, { city: action.payload });
    case CHANGE_STATE: return Object.assign({}, state, { state: action.payload });
    case CHANGE_ZIPCODE: return Object.assign({}, state, { zipcode: action.payload });
    default: return state;
  }
}

export function changeName( name ) {
  return {
    type: CHANGE_NAME,
    payload: name
  }
}
export function changeAddress( address ) {
  return {
    type: CHANGE_ADDRESS,
    payload: address
  }
}
export function changeCity( city ) {
  return {
    type: CHANGE_CITY,
    payload: city
  }
}
export function changeState( state ) {
  return {
    type: CHANGE_STATE,
    payload: state
  }
}
export function changeZipcode( zipcode ) {
  return {
    type: CHANGE_ZIPCODE,
    payload: zipcode
  }
}
