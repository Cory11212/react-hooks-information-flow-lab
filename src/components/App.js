import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function DarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={DarkModeClick} isDarkMode/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
