import axios from "axios";

const GET_INMOBILIARIAS = "GET_INMOBILIARIAS";
const GET_INMOBILIARIAS_SUCCESS = "GET_INMOBILIARIAS_SUCCESS";
const GET_INMOBILIARIAS_FAILURE = "GET_INMOBILIARIAS_FAILURE";

const getInmobiliarias = () => {
  return (dispatch) => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_INMOBILIARIAS });
    // Return promise with success and failure actions
    return axios.get("/api/auth/user").then(
      (inmobiliarias) =>
        dispatch({ type: GET_INMOBILIARIAS_SUCCESS, payload: inmobiliarias }),
      (err) => dispatch({ type: GET_INMOBILIARIAS_FAILURE, payload: err })
    );
  };
};

const types = {
  GET_INMOBILIARIAS,
  GET_INMOBILIARIAS_SUCCESS,
  GET_INMOBILIARIAS_FAILURE,
};

const actions = { getInmobiliarias };

export { types, actions };
