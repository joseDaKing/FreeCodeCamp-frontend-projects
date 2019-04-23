import React from "react";

export default props => {
    let classes = ["btn"];

    if (props.success) {
        classes.push("btn-success");
    }
    
    else if(props.danger) {
        classes.push("btn-danger");
    }

    else if (props.warning) {
        classes.push("btn-warning");
    }

    else if (props.primary) {
        classes.push("btn-primary");
    }

    classes.push("text-white");
    
    return (
        <button type="button" className={classes.join(" ")} onClick={props.onClick}>
            {props.name}
        </button>
    )
}