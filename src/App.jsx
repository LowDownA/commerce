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

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <HeaderBarItem />

      <Header />
      <Routes>
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route
          path="/questions"
          element={
            <Questions searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          } // Pass props if needed
        />
        <Route
          path="/products"
          element={<Products searchTerm={searchTerm} />}
        />
      </Routes>
    </div>
  );
};

export default App;
