import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import Customers from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/statistic" element={<StatisticPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;