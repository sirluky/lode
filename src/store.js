import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import rootReducers from "./reducers";

const middleware = [];

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
