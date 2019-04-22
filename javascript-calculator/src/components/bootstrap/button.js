import React from "react";

export default props => {
    let classes = ["btn", "btn-lg", "btn-block"];

    const styles = {
        margin: "0px"
    };

    if (props.color === "secondary") {
        classes.push("btn-warning")
        classes.push("text-white")
    }

    else if (props.color === "primary") {
        classes.push("btn-light");
    }

    return (
        <button
        onClick={props.onClick}
        style={styles} 
        type="button" 
        className={classes.join(" ")}>
            {props.name}
        </button>
    );
}