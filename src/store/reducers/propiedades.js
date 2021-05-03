import { typesPropiedades } from "../actions/propiedades";

const initialState = {
  loading: false,
  error: null,
  result: [],
  oneResult: null
};

function Propiedades(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case typesPropiedades.GET_PROPIEDADES:
      return { ...state, loading: true };

    case typesPropiedades.GET_PROPIEDADES_FAILUTE:
      return { ...state, loading: false, error: payload };

    case typesPropiedades.GET_PROPIEDADES_SUCCESS:
      return { ...state, loading: false, result: payload };
    case typesPropiedades.GET_ONE_PROPIEDADE:
      return { ...state, loading: true };

    case typesPropiedades.GET_ONE_PROPIEDADE_FAILUTE:
      return { ...state, loading: false, error: payload };

    case typesPropiedades.GET_ONE_PROPIEDADE_SUCCESS:
      return { ...state, loading: false, oneResult: payload };

    case typesPropiedades.POST_PROPIEDADES:
      return { ...state, loading: true };

    case typesPropiedades.POST_PROPIEDADES_FAILURE:
      return { ...state, loading: false , error: true};

    case typesPropiedades.POST_PROPIEDADES_SUCCESS:
      return { ...state, loading: false , error: false, result: [payload]};
    
    case typesPropiedades.PUT_PROPIEDADES:
      return { ...state, loading: true };

    case typesPropiedades.PUT_PROPIEDADES_FAILURE:
      return { ...state, loading: false , error: true};

    case typesPropiedades.PUT_PROPIEDADES_SUCCESS:
      return { ...state, loading: false , error: false, result: [payload]};

    case typesPropiedades.DELETE_PROPIEDADES:
      return { ...state, loading: true };
  
    case typesPropiedades.DELETE_PROPIEDADES_FAILURE:
      return { ...state, loading: false , error: true};
  
    case typesPropiedades.DELETE_PROPIEDADES_SUCCESS:
      return { ...state, loading: false , error: false, result: [payload]};

    default:
      return state;
  }
}

export default Propiedades;
