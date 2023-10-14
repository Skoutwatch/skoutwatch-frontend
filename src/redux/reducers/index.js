import { combineReducers } from "redux";
import alert from "./alertReducer";
import player from "./playerReducer";

export default combineReducers({
  alert,
  player,
});
