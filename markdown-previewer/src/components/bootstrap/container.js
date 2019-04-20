import React from "react";

import {
    CssClasses,
    addColorTypeToCssClass
} 
from "../../utilities";

const container = props => {
    const classes = new CssClasses("container");
    
    addColorTypeToCssClass({
        type: "bg",
        classes: classes,
        props: props
    });

    if (props.fluid) {
        classes.concatStringToClass("container", "fluid")
    }

    return (
        <div className={classes.toString()}>
            {props.children}
        </div>
    );
};

export default container;