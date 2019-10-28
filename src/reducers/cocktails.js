import cocktails from "../cocktails.json";

const initialState = cocktails;
//console.log(initialState);

// Function takes a current state (or initial state) and an action, and returns a new state
//which may or may not be based on the action (hence the switch statement).
// The reducer(s) define(s) the STATE of the STORE.
const reducer = (state = initialState, action = {}) => {
  // this is a good place to put console.log()s
  switch (action.type) {
    case "ADD_COCKTAIL": {
      return [...state, { ...action.payload }];
    }
    default:
      return state;
  }
};

export default reducer;
