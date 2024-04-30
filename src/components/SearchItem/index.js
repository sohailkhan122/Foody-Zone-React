import React from "react";
import { food_data } from "../../data";
import Card from "../Card";

const searchItem = ({ SearchItem }) => {
  let filtered = food_data.filter((item) => item.name.includes(SearchItem));
  console.log(filtered);
  return (
    <div className="searchItemsection">
      <div className="searchItemcontent">
        {filtered.map((item) => {
          return (
            <div className="cards" key={Math.random()}>
              <Card
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default searchItem;
