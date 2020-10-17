import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import "./App.css";

import Dashboard from "./pages/Dashboard";
import Kategori from "./pages/Kategori";
import Produk from "./pages/Produk";
import User from "./pages/User";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <div className="App">
        <Router>
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
        </Router>
        {/* <Dashboard /> */}
        {/* <Kategori/> */}
        {/* <Produk/> */}
        {/* <User/> */}
       {/* <Booking/>  */}
      </div>
    </>
  );
}

export default App;
