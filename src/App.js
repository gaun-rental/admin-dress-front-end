import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


import "./App.css";

// import Dashboard from "./pages/Dashboard";
// import Kategori from "./pages/Kategori/Kategori";
// import Produk from "./pages/Produk/Produk";
// import User from "./pages/User/User";
// import Booking from "./pages/Booking/Booking";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <div className="App">
        {/* <Router>
        <Switch>
        <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/category">
            <Kategori />
          </Route>
          <Route path="/product">
            <Produk />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
        </Switch>
        </Router> */}
        <Login/>
      </div>
    </>
  );
}

export default App;
