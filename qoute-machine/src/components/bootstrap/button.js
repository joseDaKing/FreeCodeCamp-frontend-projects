import React from "react";

const button = props => (
    <button className="btn btn-primary btn-md" onClick={props.onClick}>
        {props.name}
    </button>
);

export default button;