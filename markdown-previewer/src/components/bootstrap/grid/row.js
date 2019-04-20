import React from "react";

import {
    CssClasses,
    addColorTypeToCssClass
} 
from "../../../utilities"

const row = props => {
    const classes = new CssClasses("row");

    addColorTypeToCssClass({
        type: "bg",
        classes: classes,
        props: props
    });

    return (
        <div className={classes.toString()}>
            {props.children}
        </div>
    )
};

export default row;