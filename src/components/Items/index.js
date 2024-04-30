import React from "react";
import { food_data } from "../../data/index";
import Card from "../Card/index";

const Items = () => {
  return (
    <div className="section">
      <div className="content">
        {food_data.map((item) => {
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

export default Items;
