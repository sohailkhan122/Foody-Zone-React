import React from "react";
import  Card  from "../Card";
import { food_data } from "../../data/index";

const Dinner = () => {
  let filtered = food_data.filter((item) => item.type.includes("dinner"));
  console.log(filtered);
  return (
    <div className="dinnersection">
      <div className="dinnercontent">
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

export default Dinner;
