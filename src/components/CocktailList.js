import React from "react";

function CocktailList(props) {
  console.log("props: ", props);
  return (
    <div>
      <h1>COCKTAIL EXPLORER</h1>
      <ul>
        {props.cocktails.map(cocktail => (
          <li
            key={cocktail.id}
            onClick={() => props.selectCocktail(cocktail.id)}
          >
            {cocktail.drink}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailList;
