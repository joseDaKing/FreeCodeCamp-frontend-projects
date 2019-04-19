import React from "react";

const jumbotron = props => {
    const styles = {
        width: "100%",
        maxWidth: props.width,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        paddingBottom: "2rem",
    };

    return (
        <div className="jumbotron" style={styles}>
            {props.children}
        </div>
    );
};

export default jumbotron