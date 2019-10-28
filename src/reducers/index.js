import { combineReducers } from "redux";
import cocktails from "./cocktails";
// this is the name you're giving to the reducer you're importing from that dir.
import selectedCocktail from "./selected-cocktail";

export default combineReducers({
  //   cocktails: cocktails
  // the above is changed to just cocktails because it's a literal property shorthand: they have the same name. No need for colon.
  cocktails,
  selectedCocktail
});
