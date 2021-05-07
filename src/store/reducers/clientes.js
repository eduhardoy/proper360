import { typesClientes } from "../actions/clientes";

const initialState = {
  loading: false,
  error: null,
  result: [],
};

function Clientes(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case typesClientes.GET_CLIENTES:
      return { ...state, loading: true };

    case typesClientes.GET_CLIENTES_FAILURE:
      return { ...state, loading: false, error: payload };

    case typesClientes.GET_CLIENTES_SUCCESS:
      return { ...state, loading: false, result: payload };

    case typesClientes.POST_CLIENTES:
      return { ...state, loading: true };

    case typesClientes.POST_CLIENTES_FAILURE:
      return { ...state, loading: false, error: true };

    case typesClientes.POST_CLIENTES_SUCCESS:
      return { ...state, loading: false, error: false, result: [payload] };

    default:
      return state;
  }
}

export default Clientes;
