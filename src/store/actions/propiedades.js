import axios from "axios";

const api = axios.create({ baseURL: "http://198.58.123.120:3006/" })

//Types
const GET_PROPIEDADES = "GET_PROPIEDADES"
const GET_PROPIEDADES_SUCCESS = "GET_PROPIEDADES_SUCCESS"
const GET_PROPIEDADES_FAILUTE = "GET_PROPIEDADES_FAILUTE"
const GET_ONE_PROPIEDADE = "GET_ONE_PROPIEDADE"
const GET_ONE_PROPIEDADE_SUCCESS = "GET_ONE_PROPIEDADE_SUCCESS"
const GET_ONE_PROPIEDADE_FAILUTE = "GET_ONE_PROPIEDADE_FAILUTE"

const types = {
  GET_PROPIEDADES,
  GET_PROPIEDADES_SUCCESS,
  GET_PROPIEDADES_FAILUTE,
  GET_ONE_PROPIEDADE,
  GET_ONE_PROPIEDADE_SUCCESS,
  GET_ONE_PROPIEDADE_FAILUTE,
};

const getPropiedadesByInmobiliarias = (inmobiliariaId) => {
  return (dispatch) => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_PROPIEDADES });
    // Return promise with success and failure actions
    return api.get("propiedades/inmobiliaria/" + inmobiliariaId)
      .then(propiedades => dispatch({ type: GET_PROPIEDADES_SUCCESS, payload: propiedades.data.body }))
      .catch(err => dispatch({ type: GET_PROPIEDADES_FAILUTE, payload: err.message }))
  }
}

const getPropiedad = (propiedadId) => {
  return (dispatch) => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_ONE_PROPIEDADE });
    // Return promise with success and failure actions
    return api.get("propiedades/" + propiedadId)
      .then(propiedades => dispatch({ type: GET_ONE_PROPIEDADE_SUCCESS, payload: propiedades.data.body }))
      .catch(err => dispatch({ type: GET_ONE_PROPIEDADE_FAILUTE, payload: err.message }))
  }
}

const getPropiedades = () => {
  return (dispatch) => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_PROPIEDADES });
    // Return promise with success and failure actions
    return api.get("propiedades")
      .then(propiedades => dispatch({ type: GET_PROPIEDADES_SUCCESS, payload: propiedades.data.body }))
      .catch(err => dispatch({ type: GET_PROPIEDADES_FAILUTE, payload: err.message }))
  }
};


const actions = { getPropiedades, getPropiedadesByInmobiliarias, getPropiedad };

export { types, actions };
