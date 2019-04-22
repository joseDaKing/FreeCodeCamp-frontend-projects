import React from "react";

export default props => {
    let styles = {
        width: "100%",
        maxWidth: `${props.width || "100%"}`
    };

    if (props.center) {
        styles = {
            ...styles,
            margin: "auto",
            position: "absolute",
            height: "28rem",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            transform: "translateY(0%)"

        }
    }

    if (props.right) {
        styles["margin-left"] = "auto";
    }

    return (
        <div style={styles} className="jumbotron"> 
            {props.children} 
        </div>
    );
}