import React, { Component } from "react";

class AddCocktailForm extends Component {
  // USE ARROW FUNCTION!!!!!!
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log("value: ", value, "name: ", name);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    if (
      this.state.name &&
      this.state.category &&
      //   this.state.ingredient &&
      this.state.measure &&
      this.state.glass &&
      this.state.instructions
    ) {
      this.props.addCocktail({
        name: this.state.name,
        category: this.state.category,
        // ingredient: this.state.ingredient,
        measure: this.state.measure,
        glass: this.state.glass,
        instructions: this.state.instructions
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Add a cocktail:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Cocktail name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Cocktail category:
            <input type="text" name="category" onChange={this.handleChange} />
          </label>
          <br />
          {/* <ul>
            Ingredients:
            <li>
              <label>
                ingredient:
                <input type="text" name="ingredient" onChange={this.handleChange} />
              </label>
            </li>
            <br />
            <li>
              <label>
                measure:
                <input type="text" name="measure" onChange={this.handleChange} />
              </label>
            </li>
          </ul> */}
          <br />
          <label>
            Type of glass:
            <input type="test" name="glass" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Instructions:{" "}
            <input
              type="text"
              name="instructions"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit Cocktail" />
        </form>
      </div>
    );
  }
}

export default AddCocktailForm;
