import axios from "axios";

const api = axios.create({ baseURL: "http://198.58.123.120:3006/" })

//Types
const GET_INMOBILIARIAS = "GET_INMOBILIARIAS";
const GET_INMOBILIARIAS_SUCCESS = "GET_INMOBILIARIAS_SUCCESS";
const GET_INMOBILIARIAS_FAILURE = "GET_INMOBILIARIAS_FAILURE";

const types = {
  GET_INMOBILIARIAS,
  GET_INMOBILIARIAS_SUCCESS,
  GET_INMOBILIARIAS_FAILURE,
};



const getInmobiliarias = () => {
  return (dispatch) => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_INMOBILIARIAS });
    // Return promise with success and failure actions
    return api.get("inmobiliarias")
      .then(inmobiliarias => dispatch({ type: GET_INMOBILIARIAS_SUCCESS, payload: inmobiliarias.data }))
      .catch(err => dispatch({ type: GET_INMOBILIARIAS_FAILURE, payload: err.message }))
  }
};



const actions = { getInmobiliarias };

export { types, actions };
