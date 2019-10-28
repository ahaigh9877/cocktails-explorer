import { createStore } from "redux";
// imports index.js from ./reducers, in which the reducers are combined.
import reducer from "./reducers";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Here's where the store gets created!
const store = createStore(reducer, enhancer);

export default store;
