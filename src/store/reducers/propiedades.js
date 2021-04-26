import { actions, types } from "../actions/propiedades";

const initialState = {
  loading: false,
  error: null,
  result: [],
  oneResult: null
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
    case types.GET_ONE_PROPIEDADE:
      return { ...state, loading: true };

    case types.GET_ONE_PROPIEDADE_FAILUTE:
      return { ...state, loading: false, error: payload };

    case types.GET_ONE_PROPIEDADE_SUCCESS:
      return { ...state, loading: false, oneResult: payload };

    case types.POST_PROPIEDADES:
        return { ...state, loading: true };

    case types.POST_PROPIEDADES_FAILURE:
        return { ...state, loading: false , error: true};

    case types.POST_PROPIEDADES_SUCCESS:
        return { ...state, loading: false , error: false, result: [payload]};

    default:
      return state;
  }
}

export default Propiedades;
