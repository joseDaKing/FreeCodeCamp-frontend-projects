import React from "react";

import {
    CssClasses,
    addColorTypeToCssClass,
    textPos
} 
from "../../utilities";

const title = props => {
    let size = props.size;

    if (!props.size) {
        size = "1";
    }

    const textPosition = textPos(props.pos);

    const classes = new CssClasses(`h${size}`);
    
    classes.addClass(textPosition);

    addColorTypeToCssClass({
        type: "text",
        classes: classes,
        props: props
    });

    return (
        <p className={classes.toString()}>{props.children}</p>
    );
}

export default title;