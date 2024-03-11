import someReducer from "./SomeReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    someReducer,
  });


export default rootReducer;