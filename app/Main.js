import React from "react";
import ReactDom from "react-dom";

function Example() {
    return (
        <div>
            <h1>My App!!! </h1>

        </div>
    )
}

ReactDom.render(<Example />, document.getElementById("app"));

/* For asinc browser reload. Dont even need to save in phpStorm and reload browser! */
if (module.hot) {
    module.hot.accept()
}