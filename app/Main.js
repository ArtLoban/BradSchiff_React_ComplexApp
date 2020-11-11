import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from './components/About';
import Terms from './components/Terms';

function Main() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomeGuest />
                </Route>
                <Route path="/about-us">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

ReactDom.render(<Main />, document.getElementById("app"));

/* For asinc browser reload. Dont even need to save in phpStorm and reload browser! */
if (module.hot) {
    module.hot.accept()
}