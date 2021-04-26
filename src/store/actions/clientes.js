import axios from "axios";

const api = axios.create({ baseURL: "http://198.58.123.120:3006/" })

//Types
const GET_CLIENTES = "GET_CLIENTES";
const GET_CLIENTES_SUCCESS = "GET_CLIENTES_SUCCESS";
const GET_CLIENTES_FAILURE = "GET_CLIENTES_FAILURE";
const POST_CLIENTES = "POST_CLIENTES";
const POST_CLIENTES_SUCCESS = "POST_CLIENTES_SUCCESS";
const POST_CLIENTES_FAILURE = "POST_CLIENTES_FAILURE";

const typesClientes = {
    GET_CLIENTES,
    GET_CLIENTES_SUCCESS,
    GET_CLIENTES_FAILURE,
    POST_CLIENTES,
    POST_CLIENTES_SUCCESS,
    POST_CLIENTES_FAILURE,
};

const getClientes = () => {
    return (dispatch) => {
        //nameless functions
        // Initial action dispatched
        dispatch({ type: GET_CLIENTES });
        // Return promise with success and failure actions
        return api.get("clientes")
            .then(cliente => dispatch({ type: GET_CLIENTES_SUCCESS, payload: cliente.data.body }))
            .catch(err => dispatch({ type: GET_CLIENTES_FAILURE, payload: err.message }))
    }
};

const postCliente = (cliente) => {
    return (dispatch) => {
        //nameless functions
        // Initial action dispatched
        dispatch({ type: POST_CLIENTES });
        // Return promise with success and failure actions
        return api.post("clientes", cliente)
            .then(cliente => dispatch({ type: POST_CLIENTES_SUCCESS, payload: cliente.data.body }))
            .catch(err => dispatch({ type: POST_CLIENTES_FAILURE, payload: err.message }))
    }
};



const actionsClientes = { postCliente, getClientes };

export { typesClientes, actionsClientes };
