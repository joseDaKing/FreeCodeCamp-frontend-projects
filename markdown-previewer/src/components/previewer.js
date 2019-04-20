import React from "react";

import {
    CssClasses
} 
from "../utilities";

const previewer = props => {
    const classes = new CssClasses("bg-light", "px-5", "py-3", "mb-3");

    const styles = {
        border: "1px solid #ced4da",
        borderRadius: "0.25rem",
        overflowX: "scroll" 
    };

    return (
        <div className={classes.toString()} style={styles}>
            {props.children}
        </div>
    );
}
export default previewer;