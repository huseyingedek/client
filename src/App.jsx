import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import Customers from "./pages/CustomerPage";
import StatisticPage from "./pages/StatisticPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];
  const isAuthPage = currentRoute === "login" || currentRoute === "register";

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
