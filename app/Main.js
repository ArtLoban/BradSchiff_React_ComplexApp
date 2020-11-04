import React from "react";
import ReactDom from "react-dom";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";

function Main() {
    return (
        <>
            <Header />
            <HomeGuest />
            <Footer />
        </>
    )
}

ReactDom.render(<Main />, document.getElementById("app"));

/* For asinc browser reload. Dont even need to save in phpStorm and reload browser! */
if (module.hot) {
    module.hot.accept()
}