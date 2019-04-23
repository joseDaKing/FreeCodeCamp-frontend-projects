import React from "react";

export default props => {
    return (
        <h1 className="display-1 text-center">
            {props.children}
        </h1>
    );
}