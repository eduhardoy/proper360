import axios from "axios";

// const api = axios.create({ baseURL: "http://198.58.123.120:3006/" });
const api = axios.create({ baseURL: "https://proper360.net/api/" });

//Types
const GET_PROPIEDADES = "GET_PROPIEDADES";
const GET_PROPIEDADES_SUCCESS = "GET_PROPIEDADES_SUCCESS";
const GET_PROPIEDADES_FAILUTE = "GET_PROPIEDADES_FAILUTE";
const GET_ONE_PROPIEDADE = "GET_ONE_PROPIEDADE";
const GET_ONE_PROPIEDADE_SUCCESS = "GET_ONE_PROPIEDADE_SUCCESS";
const GET_ONE_PROPIEDADE_FAILUTE = "GET_ONE_PROPIEDADE_FAILUTE";
const POST_PROPIEDADES = "POST_PROPIEDADES";
const POST_PROPIEDADES_SUCCESS = "POST_PROPIEDADES_SUCCESS";
const POST_PROPIEDADES_FAILURE = "POST_PROPIEDADES_FAILURE";
const PUT_PROPIEDADES = "PUT_PROPIEDADES";
const PUT_PROPIEDADES_SUCCESS = "PUT_PROPIEDADES_SUCCESS";
const PUT_PROPIEDADES_FAILURE = "PUT_PROPIEDADES_FAILURE";
const DELETE_PROPIEDADES = "DELETE_PROPIEDADES";
const DELETE_PROPIEDADES_SUCCESS = "DELETE_PROPIEDADES_SUCCESS";
const DELETE_PROPIEDADES_FAILURE = "DELETE_PROPIEDADES_FAILURE";
const SET_SELECTED_PROPIEDAD = "SET_SELECTED_PROPIEDAD";

const typesPropiedades = {
  GET_PROPIEDADES,
  GET_PROPIEDADES_SUCCESS,
  GET_PROPIEDADES_FAILUTE,
  GET_ONE_PROPIEDADE,
  GET_ONE_PROPIEDADE_SUCCESS,
  GET_ONE_PROPIEDADE_FAILUTE,
  POST_PROPIEDADES,
  POST_PROPIEDADES_SUCCESS,
  POST_PROPIEDADES_FAILURE,
  PUT_PROPIEDADES,
  PUT_PROPIEDADES_SUCCESS,
  PUT_PROPIEDADES_FAILURE,
  DELETE_PROPIEDADES,
  DELETE_PROPIEDADES_SUCCESS,
  DELETE_PROPIEDADES_FAILURE,
  SET_SELECTED_PROPIEDAD,
};

const getPropiedadesByInmobiliarias = inmobiliariaId => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_PROPIEDADES });
    // Return promise with success and failure actions
    return api
      .get("propiedades/inmobiliaria/" + inmobiliariaId)
      .then(propiedades =>
        dispatch({
          type: GET_PROPIEDADES_SUCCESS,
          payload: propiedades.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: GET_PROPIEDADES_FAILUTE, payload: err.message })
      );
  };
};

const getPropiedad = propiedadId => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_ONE_PROPIEDADE });
    // Return promise with success and failure actions
    return api
      .get("propiedades/" + propiedadId)
      .then(propiedades =>
        dispatch({
          type: GET_ONE_PROPIEDADE_SUCCESS,
          payload: propiedades.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: GET_ONE_PROPIEDADE_FAILUTE, payload: err.message })
      );
  };
};

const getPropiedades = () => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_PROPIEDADES });
    // Return promise with success and failure actions
    return api
      .get("propiedades")
      .then(propiedades =>
        dispatch({
          type: GET_PROPIEDADES_SUCCESS,
          payload: propiedades.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: GET_PROPIEDADES_FAILUTE, payload: err.message })
      );
  };
};

const postPropiedad = propiedad => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: POST_PROPIEDADES });
    // Return promise with success and failure actions
    return api
      .post("propiedades", propiedad, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(propiedad =>
        dispatch({
          type: POST_PROPIEDADES_SUCCESS,
          payload: propiedad.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: POST_PROPIEDADES_FAILURE, payload: err.message })
      );
  };
};

const putPropiedad = propiedad => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: PUT_PROPIEDADES });
    // Return promise with success and failure actions
    return api
      .put("propiedades/" + propiedad._key, propiedad, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(propiedad =>
        dispatch({
          type: PUT_PROPIEDADES_SUCCESS,
          payload: propiedad.data.body,
        })
      )
      .catch(err =>
        dispatch({ type: PUT_PROPIEDADES_FAILURE, payload: err.message })
      );
  };
};

const deletePropiedad = propiedadId => {
  return dispatch => {
    dispatch({ type: DELETE_PROPIEDADES });
    return api
      .delete("propiedades/" + propiedadId, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(propiedad =>
        dispatch({ type: DELETE_PROPIEDADES_SUCCESS, payload: propiedad.data })
      )
      .catch(err =>
        dispatch({ type: DELETE_PROPIEDADES_FAILURE, payload: err.message })
      );
  };
};

const setSelectedPropiedad = propiedadData => {
  return dispatch =>
    dispatch({ type: SET_SELECTED_PROPIEDAD, payload: propiedadData });
};

const actionsPropiedades = {
  getPropiedades,
  getPropiedadesByInmobiliarias,
  getPropiedad,
  postPropiedad,
  putPropiedad,
  deletePropiedad,
  setSelectedPropiedad,
};

export { typesPropiedades, actionsPropiedades };
