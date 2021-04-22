import { actions, types } from "../actions/clientes";

const initialState = {
    loading: false,
    error: null,
    result: [],
};

function Inmobiliarias(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.GET_CLIENTES:
            return { ...state, loading: true };

        case types.GET_CLIENTES_FAILURE:
            return { ...state, loading: false, error: payload };

        case types.GET_CLIENTES_SUCCESS:
            return { ...state, loading: false, result: payload };
        case types.POST_CLIENTES:
            return { ...state, loading: true };

        case types.POST_CLIENTES_FAILURE:
            return { ...state, loading: false , error: true};

        case types.POST_CLIENTES_SUCCESS:
            return { ...state, loading: false , error: false, result: [payload]};

        default:
            return state;
    }
}

export default Inmobiliarias;
