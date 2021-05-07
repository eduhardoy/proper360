import { combineReducers } from "redux";
import inmobiliarias from "./inmobiliarias";
import propiedades from "./propiedades";
import clientes from "./clientes";

const rootReducers = combineReducers({
  inmobiliarias: inmobiliarias,
  propiedades: propiedades,
  clientes: clientes,
});

export default rootReducers;
