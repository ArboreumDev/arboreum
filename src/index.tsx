import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "./Assets/css/nucleo-icons.css";
import "./Assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "./Assets/demo/demo.css";
import "./Assets/demo/react-demo.css";


import RegisterPage from "./Screens/Register/RegisterPage";
import LoginPage from "./Screens/Login/LoginPage";
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/home" render={props => <App />} />
            <Route path="/login" render={props => <LoginPage {...props} />} />
            <Route path="/register" render={props => <RegisterPage {...props} />} />
            <Redirect from="/" to="/home" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
