import { combineReducers } from "redux";
import adminReducer from "./admin";

const rootReducers = combineReducers({
  admin: adminReducer,
});

export default rootReducers;
