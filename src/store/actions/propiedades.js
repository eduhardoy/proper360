import axios from "axios";

const api = axios.create({ baseURL: "http://198.58.123.120:3006/" })

//Types
const GET_PROPIEDADES = "GET_PROPIEDADES"
const GET_PROPIEDADES_SUCCESS = "GET_PROPIEDADES_SUCCESS"
const GET_PROPIEDADES_FAILUTE = "GET_PROPIEDADES_FAILUTE"

const types = {
  GET_PROPIEDADES,
  GET_PROPIEDADES_SUCCESS,
  GET_PROPIEDADES_FAILUTE,
};


const getPropiedades = () => {
  return dispatch => {
    dispatch({ type: GET_PROPIEDADES })

    return axios.get("propiedades")
      .then(propiedades => dispatch({ type: GET_PROPIEDADES_SUCCESS, payload: propiedades.data }))
      .catch(err => dispatch({ tyoe: GET_PROPIEDADES_FAILUTE, payload: err.message }))
  }
}


const actions = { getPropiedades };

export { types, actions };
