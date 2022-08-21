import { useState, useEffect } from "react";
import "./Main.css"

const url =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=b5dff3a6a2844ba087e6af7bf0915a07&";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // 'x-api-key': 'b5dff3a6a2844ba087e6af7bf0915a07'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
};

function Main() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fun = async (search) => {
    setIsLoading(true);
    const str = url + "sort=" + search;
    const food = await fetch(str, options);
    !food.ok && new Error("Network response was not OK");
    const foods = await food.json();
    console.log(foods)
    const res = foods.results;
    setItems(res);
    setIsLoading(false);
  };
  return (
    <div className="main">
      <div className="main-top">
        <button disabled={isLoading} onClick={() => fun("protein")} className="btn">Protein Rich</button>
        <button disabled={isLoading}  onClick={() => fun("calories")} className="btn">Calories</button>
        <button disabled={isLoading}  onClick={() => fun("carbohydrates")} className="btn">Carbohydrates</button>
        <button disabled={isLoading}  onClick={() => fun("energy")} className="btn">Energy</button>
        <button disabled={isLoading}  onClick={() => fun("vitamin-a")} className="btn">Vitamins</button>
      </div>
      <div className="main-middle">
        <div class="items-grid">
          {items.map((item) => {
            return (
              <div class="item">
                <p class="item-image">
                  <img class="item-img" src={item.image} alt="Food" />
                </p>
                <p class="item-title">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
