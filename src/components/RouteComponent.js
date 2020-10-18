import React from 'react'
import {connect} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import AllRouteComponent from "./AllRoutComponent";

function RouteComponent(props) {
    const {login} = props || {};

    return (
       <>
        <Router path="/" >
            <div>
                <AllRouteComponent login={login} />
            </div>

        </Router>
       </>
    )
}

export default RouteComponent
