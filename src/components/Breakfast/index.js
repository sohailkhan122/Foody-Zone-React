import React from "react";
import Card from "../Card";
import { food_data } from "../../data/index";

const Breakfast = () => {
  let filtered = food_data.filter((item) => item.type.includes("breakfast"));
  console.log(filtered);
  return (
    <div className="breakfastsection">
      <div className="breakfastcontent">
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

export default Breakfast;
