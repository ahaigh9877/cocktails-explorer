import React from "react";
import "./App.css";
import CocktailListContainer from "./components/CocktailListContainer";
import CocktailDetailsContainer from "./components/CocktailDetailsContainer";
import AddCocktailFormContainer from "./components/AddCocktailFormContainer";

function App() {
  return (
    <div className="App">
      {/* Notice that no props are being sent to this component, cos that's taken care of by Redux. */}
      <CocktailListContainer />
      <CocktailDetailsContainer />
      <AddCocktailFormContainer />
    </div>
  );
}

export default App;
