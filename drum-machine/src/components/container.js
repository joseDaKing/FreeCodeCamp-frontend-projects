import React from "react";

export default props => {
    const styles = {
        width: "100%", 
        maxWidth: "45rem", 
        height: "28rem",
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        margin: "auto",
        marginTop: "0px"
    };
    return (
        <div className="jumbotron" style={styles}>
            {props.children}
        </div>
    );
};