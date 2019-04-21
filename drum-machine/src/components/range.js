import React from "react";

export default props => (
    <div className="form-group m-0 w-100">
        <input 
        className="custom-range"
        type="range"
        value={props.value}
        onChange={props.onChange}
        min={props.min || 0}
        max={props.max || 100}
        step={props.step || 1}/>
    </div>
);