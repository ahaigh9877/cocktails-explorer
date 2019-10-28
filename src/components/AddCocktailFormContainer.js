import React, { Component } from "react";
import AddCocktailForm from "./AddCocktailForm";

class AddCocktailFormContainer extends Component {
  addCocktail = cocktail => {
    this.props.dispatch({
      type: "ADD_COCKTAIL",
      payload: {
        id: Math.ceil(Math.random() * 10000),
        ...cocktail
      }
    });
  };
  render() {
    return <AddCocktailForm addCocktail={this.addCocktail} />;
  }
}

export default AddCocktailFormContainer;
