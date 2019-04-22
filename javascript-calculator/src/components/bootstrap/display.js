import React from "react";

export default React.forwardRef((props, ref) => {
    const styles = {
        textAlign: "center"
    }

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                {props.indicator}
            </div>
            
            <input 
            disabled
            style={styles}
            value={props.text} type="text" 
            className="form-control form-control-lg bg-white"/>

            
            <div className="input-group-append">
                {props.children}
            </div>
        </div>
    )
})

