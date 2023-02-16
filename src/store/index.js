import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import todoReducer from "./todo/todoReducer";
const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});
export default createStore(rootReducer);
