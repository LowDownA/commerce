import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderBarItem from "./HeaderBarItem";
import CheckoutForm from "./CheckoutForm";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Use bootstrap.bundle.min.js for both CSS and JS
import Products from "./Products";
import Questions from "./Questions"; // Ensure correct import path for Questions
import ProductsList from "./ProductsList";
import Footer from "./Footer";
import Home from "./Home";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keepShopping, setKeepShopping] =  useState(false);

  return (
    <div>
      <HeaderBarItem />

      <Header />

      <Routes>
        <Route path="/checkout" element={<CheckoutForm doMoreShopping={keepShopping} setDoMoreShopping={setKeepShopping} />} />
        <Route
          path="/questions"
          element={
            <Questions searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          } // Pass props if needed
        />
        <Route
          path="/productslist"
          element={<ProductsList searchTerm={searchTerm} />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
