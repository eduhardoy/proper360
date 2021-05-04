import axios from "axios";

const api = axios.create({ baseURL: "http://198.58.123.120:3006/" });

//Types
const GET_INMOBILIARIAS = "GET_INMOBILIARIAS";
const GET_INMOBILIARIAS_SUCCESS = "GET_INMOBILIARIAS_SUCCESS";
const GET_INMOBILIARIAS_FAILURE = "GET_INMOBILIARIAS_FAILURE";
const GET_INMOBILIARIA = "GET_INMOBILIARIA";
const GET_INMOBILIARIA_SUCCESS = "GET_INMOBILIARIA_SUCCESS";
const GET_INMOBILIARIA_FAILURE = "GET_INMOBILIARIA_FAILURE";
const POST_INMOBILIARIAS = "POST_INMOBILIARIAS";
const POST_INMOBILIARIAS_SUCCESS = "POST_INMOBILIARIAS_SUCCESS";
const POST_INMOBILIARIAS_FAILURE = "POST_INMOBILIARIAS_FAILURE";
const PUT_INMOBILIARIAS = "PUT_INMOBILIARIAS";
const PUT_INMOBILIARIAS_SUCCESS = "PUT_INMOBILIARIAS_SUCCESS";
const PUT_INMOBILIARIAS_FAILURE = "PUT_INMOBILIARIAS_FAILURE";
const DELETE_INMOBILIARIAS = "DELETE_INMOBILIARIAS";
const DELETE_INMOBILIARIAS_SUCCESS = "DELETE_INMOBILIARIAS_SUCCESS";
const DELETE_INMOBILIARIAS_FAILURE = "DELETE_INMOBILIARIAS_FAILURE";
const SET_SELECTED_INMOBILIARIA = "SET_SELECTED_INMOBILIARIA";

const typesInmobiliarias = {
  GET_INMOBILIARIAS,
  GET_INMOBILIARIAS_SUCCESS,
  GET_INMOBILIARIAS_FAILURE,
  GET_INMOBILIARIA,
  GET_INMOBILIARIA_SUCCESS,
  GET_INMOBILIARIA_FAILURE,
  POST_INMOBILIARIAS,
  POST_INMOBILIARIAS_SUCCESS,
  POST_INMOBILIARIAS_FAILURE,
  PUT_INMOBILIARIAS,
  PUT_INMOBILIARIAS_SUCCESS,
  PUT_INMOBILIARIAS_FAILURE,
  DELETE_INMOBILIARIAS,
  DELETE_INMOBILIARIAS_SUCCESS,
  DELETE_INMOBILIARIAS_FAILURE,
  SET_SELECTED_INMOBILIARIA,
};

const getInmobiliariaWithPropiedades = (inmobiliariaId, queries) => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_INMOBILIARIA });
    // Return promise with success and failure actions
    return api
      .get("inmobiliarias/" + inmobiliariaId + queries)
      .then(inmobiliaraias => {
        console.log(inmobiliaraias);
        dispatch({
          type: GET_INMOBILIARIA_SUCCESS,
          payload: inmobiliaraias.data.body,
        });
      })
      .catch(err =>
        dispatch({ type: GET_INMOBILIARIA_FAILURE, payload: err.message })
      );
  };
};

const getInmobiliarias = () => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_INMOBILIARIAS });
    // Return promise with success and failure actions
    return api
      .get("inmobiliarias")
      .then(inmobiliarias =>
        dispatch({
          type: GET_INMOBILIARIAS_SUCCESS,
          payload: inmobiliarias.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: GET_INMOBILIARIAS_FAILURE, payload: err.message })
      );
  };
};

const postInmobiliarias = inmobiliaria => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: POST_INMOBILIARIAS });
    // Return promise with success and failure actions
    return api
      .post("inmobiliarias", inmobiliaria, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(inmobiliaria =>
        dispatch({
          type: POST_INMOBILIARIAS_SUCCESS,
          payload: inmobiliaria.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: POST_INMOBILIARIAS_FAILURE, payload: err.message })
      );
  };
};

const putInmobiliarias = inmobiliaria => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: PUT_INMOBILIARIAS });
    // Return promise with success and failure actions
    return api
      .put("inmobiliarias/" + inmobiliaria._key , inmobiliaria, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(inmobiliaria =>
        dispatch({
          type: PUT_INMOBILIARIAS_SUCCESS,
          payload: inmobiliaria.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: PUT_INMOBILIARIAS_FAILURE, payload: err.message })
      );
  };
};

const deleteInmobiliarias = inmobiliariaId => {
  return dispatch => {
    dispatch({ type: DELETE_INMOBILIARIAS });
    return api
      .delete("inmobiliarias/" + inmobiliariaId, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(inmobiliaria =>
        dispatch({
          type: DELETE_INMOBILIARIAS_SUCCESS,
          payload: inmobiliaria.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: DELETE_INMOBILIARIAS_FAILURE, payload: err.message })
      );
  };
};

const setSelectedInmobiliaria = inmobiliariaData => {
  return dispatch =>
    dispatch({ type: SET_SELECTED_INMOBILIARIA, payload: inmobiliariaData });
};

const actionsInmobiliarias = {
  getInmobiliarias,
  getInmobiliariaWithPropiedades,
  postInmobiliarias,
  putInmobiliarias,
  deleteInmobiliarias,
  setSelectedInmobiliaria,
};

export { typesInmobiliarias, actionsInmobiliarias };
