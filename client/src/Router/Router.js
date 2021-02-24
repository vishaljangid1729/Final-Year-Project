import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Consumer } from "../pages/consumer"
import { Distributor } from "../pages/distributor"
import Home from "../pages/Home"
import { Manufacture } from "../pages/manufacture"
import { Retailer } from "../pages/retailer"
import Blockchain from "../temp_app"
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component={Home}></Route>
                <Route exact path ='/distributor' component={Distributor}></Route>
                <Route exact path ='/retailer' component={Retailer}></Route>
                <Route exact path ='/consumer' component={Consumer}></Route>
                <Route exact path ='/manufacture' component={Manufacture}></Route>
                <Route exact path ='/block' component={Blockchain}></Route>

            </Switch>
        </BrowserRouter>
    )
}

export {Router}
