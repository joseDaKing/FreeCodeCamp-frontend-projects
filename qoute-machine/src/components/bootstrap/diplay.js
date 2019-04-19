import React from "react";

const display = props => {
    const styles =  {
        fontSize: "3rem"
    };

    return (
        <h1 className="display-4 text-center" style={styles}>
            {props.title}
        </h1>
    );
}

export default display;