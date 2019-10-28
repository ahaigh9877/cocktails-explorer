import React from "react";

function cocktailDetails(props) {
  const cocktail = props.cocktail;

  return (
    <div>
      <h2>{cocktail.drink}</h2>
      <img
        height="200px"
        key={cocktail.thumbnail}
        src={cocktail.thumbnail}
        alt={cocktail.drink}
      ></img>
      <div>
        <p key={cocktail.category}>Category: {cocktail.category}</p>
        <em>Ingredients:</em>

        <ul>
          {cocktail.ingredients.map(ingredient => (
            <li key={ingredient.name}>
              {ingredient.name}: {ingredient.measure}
            </li>
          ))}
        </ul>
        <em>Glass:</em>
        <p key={cocktail.glass}>{cocktail.glass}</p>
        <em>Instructions:</em>
        <p key={cocktail.instructions}>{cocktail.instructions}</p>
      </div>
    </div>
  );
}

export default cocktailDetails;
