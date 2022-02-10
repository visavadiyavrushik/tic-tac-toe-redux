import { combineReducers } from "redux";
import { historyReducer } from "./reducer";

const rootReducer = combineReducers({
  history : historyReducer,
});

export default rootReducer;
