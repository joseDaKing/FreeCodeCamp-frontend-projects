import React from "react";

const column = props => {
    const classes = ["col-sm"];

    if (props.right) {
        classes.push("text-right");
    }

    if (props.center) {
        classes.push("text-center");
    }

    return (
        <div className={classes.join(" ")}> {props.children} </div>
    );
};

export default column;