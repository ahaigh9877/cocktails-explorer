import React from "react";
import CocktailList from "./CocktailList";
import { connect } from "react-redux";

class CocktailListContainer extends React.Component {
  selectCocktail = id => {
    // now we use DISPATCH to send our action, with type and payload.
    // REMEMBER TO CHANGE THIS TO AN ARROW FUNCTION!!! so this.props can be accessed.
    this.props.dispatch({
      type: "SELECT_COCKTAIL",
      payload: id
    });
    //console.log("selected cocktail: ", id);
  };

  render() {
    return (
      <CocktailList
        cocktails={this.props.cocktails}
        selectCocktail={this.selectCocktail}
      />
    );
  }
}

// Returns props that are relevant to this component. In this case, "cocktails". It's maybe more helpful to call the state "reduxState" here.
// reduxState is the STORE.
const mapStateToProps = reduxState => {
  return {
    cocktails: reduxState.cocktails
  };
};

// This is how the component gets its props from the store. So a mapStateToProps() function must be included here.
// This is different from normal export, in which the component is exported, oh no.
// Instead, the component is "wrapped" in Redux juju, so that's why there are TWO components visible if you check the
// React devtools, separated by "Provider". Provider also passes a special prop: dispatch.
export default connect(mapStateToProps)(CocktailListContainer);
