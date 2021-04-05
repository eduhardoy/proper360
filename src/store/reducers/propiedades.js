import { actions, types } from "../actions/propiedades";

const initialState = {
  loading: false,
  error: null,
  result: [],
};

function Propiedades(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROPIEDADES:
      return { ...state, loading: true };

    case types.GET_PROPIEDADES_FAILUTE:
      return { ...state, loading: false, error: payload };

    case types.GET_PROPIEDADES_SUCCESS:
      return { ...state, loading: false, result: payload };

    default:
      return state;
  }
}

export default Propiedades;
