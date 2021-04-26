import { actionsInmobiliarias, typesInmobiliarias } from "../actions/inmobiliarias";

const initialState = {
  loading: false,
  error: null,
  result: [],
};

function Inmobiliarias(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case typesInmobiliarias.GET_INMOBILIARIAS:
      return { ...state, loading: true };

    case typesInmobiliarias.GET_INMOBILIARIAS_FAILURE:
      return { ...state, loading: false, error: payload };

    case typesInmobiliarias.GET_INMOBILIARIAS_SUCCESS:
      return { ...state, loading: false, result: payload };

    case typesInmobiliarias.POST_INMOBILIARIAS:
      return { ...state, loading: true };

    case typesInmobiliarias.POST_INMOBILIARIAS_FAILURE:
      return { ...state, loading: false , error: true};

    case typesInmobiliarias.POST_INMOBILIARIAS_SUCCESS:
      return { ...state, loading: false , error: false, result: [payload]};

    case typesInmobiliarias.PUT_INMOBILIARIAS:
      return { ...state, loading: true };
  
    case typesInmobiliarias.PUT_INMOBILIARIAS_FAILURE:
      return { ...state, loading: false , error: true};
  
    case typesInmobiliarias.PUT_INMOBILIARIAS_SUCCESS:
      return { ...state, loading: false , error: false, result: [payload]};
      
    default:
      return state;
  }
}

export default Inmobiliarias;
