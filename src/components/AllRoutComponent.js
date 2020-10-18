import React from 'react'
import {Route} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"

function AllRoutComponent() {
    return (
        <>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Login} />

        </>
    )
}

export default AllRoutComponent
