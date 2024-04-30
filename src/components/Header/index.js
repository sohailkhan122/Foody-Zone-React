import React, { useState } from "react";
import Breakfast from "../Breakfast";
import Items from "../Items";
import Lunch from "../Lunch";
import Dinner from "../Dinner";
import searchItem from "../SearchItem";
const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [SearchItem, setSearchItem] = useState("");
  const [render, setRender] = useState(false);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <>
      <div className="header">
        <div className="name_serach_bar">
          <img src="../Images/Foody Zone.png" alt="Foodyzone" />
          <input
            type="text"
            placeholder="Search Food...."
            onChange={(e) => {
              setSearchItem(e.target.value);
              setRender(true);
            }}
          />
        </div>
        <div className="btns">
          <button onClick={() => handleButtonClick(1)}>All</button>
          <button onClick={() => handleButtonClick(2)}>Breakfast</button>
          <button onClick={() => handleButtonClick(3)}>Lunch</button>
          <button onClick={() => handleButtonClick(4)}>Dinner</button>
        </div>
      </div>
      <div>
        {render ? (
          <searchItem SearchItem={SearchItem} />
        ) : activeButton === 1 ? (
          <Items />
        ) : activeButton === 2 ? (
          <Breakfast />
        ) : activeButton === 3 ? (
          <Lunch />
        ) : activeButton === 4 ? (
          <Dinner />
        ) : (
          <Items />
        )}
      </div>
    </>
  );
};

export default Header;
