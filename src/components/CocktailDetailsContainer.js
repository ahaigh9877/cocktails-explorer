import React, { Component } from "react";
import { connect } from "react-redux";
import CocktailDetails from "./CocktailDetails";

class CocktailDetailsContainer extends Component {
  render() {
    const cocktail = this.props.cocktail;
    if (!cocktail) return null;
    // cocktail defined above as cocktail from props.
    return <CocktailDetails cocktail={cocktail} />;
  }
}

// got to define a mapStateToProps here.
const mapStateToProps = state => {
  if (state.selectedCocktail !== null) {
    return {
      cocktail: state.cocktails.find(
        cocktail => cocktail.id === state.selectedCocktail
      )
    };
  }
  return {};
};

export default connect(mapStateToProps)(CocktailDetailsContainer);
