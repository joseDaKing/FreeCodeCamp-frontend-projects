import React from "react";

const form = props => {
    const styles = {
        minHeight: "100vh",
        maxHeight: "100%",
        overflowY: "visible"
    };

    return (
        <div className="form-group">
            <textarea className="form-control" onChange={props.onChange} style={styles}></textarea>
        </div>
    );
}

export default form;