import React from "react";
import { Route, Routes } from "react-router";
import FeaturedProducts from "./Components/FeaturedProducts";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import NewProducts from "./Components/NewProducts";
import OneUser from "./Components/OneUser";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Components/Products";
import Users from "./Components/Users";

// import About from "./Components/About";
const LazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<OneUser />} />
        <Route path="*" element={<div> Error Loading Page </div>} />
      </Routes>
    </div>
  );
}
export default App;
