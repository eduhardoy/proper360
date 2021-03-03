import { actions, types } from "../actions/admin";

const initialState = {
  loading: false,
  error: null,
  result: [],
};

function adminReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_INMOBILIARIAS:
      return { ...state, loading: true };

    case types.GET_INMOBILIARIAS_FAILURE:
      return { ...state, loading: false, error: payload };

    case types.GET_INMOBILIARIAS_SUCCESS:
      return { ...state, loading: false, result: payload };
      
    default:
      return state;
  }
}

export default adminReducer;
