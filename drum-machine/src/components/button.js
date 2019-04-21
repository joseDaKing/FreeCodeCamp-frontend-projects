import React from "react";

export default props => {
    const styles = {
        textTransform: "uppercase",
        margin: "0px"
    };

    return (
        <button 
        className="btn btn-dark btn-lg btn-block"
        onClick={props.onClick} 
        style={styles}>
            {props.name}
        </button>
    );
}