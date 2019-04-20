import React from "react";

import {
    CssClasses,
    addColorTypeToCssClass
} 
from "../../../utilities"

const column = props => {
    const classes = new CssClasses("col-lg");

    addColorTypeToCssClass({
        type: "bg",
        classes: classes,
        props: props
    });

    return (
        <div className={classes.toString()}>
            {props.children}
        </div>
    );
}
export default column;