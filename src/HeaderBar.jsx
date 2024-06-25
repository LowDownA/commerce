import React, { useState, useEffect } from "react";
import HeaderBarItem from "./HeaderBarItem";
import SearchBar from "./SearchBar";
function HeaderBar() {
  return (
    <div>
      <HeaderBarItem />
      <SearchBar />
    </div>
  );
}
export default HeaderBar;
