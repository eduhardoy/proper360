import { combineReducers } from "redux";
import inmobiliarias from "./inmobiliarias";
import propiedades from './propiedades'

const rootReducers = combineReducers({
  inmobiliarias: inmobiliarias,
  propiedades: propiedades
});

export default rootReducers;
