import React from "react";
export default props => {
    const styles = {
        display: "block"
    };

    return (
        <div className="form-group">
            <label style={styles} className="text-center"> 
                {props.label} 
            </label>
            
            <input 
            onChange={props.onChange}
            type={props.type} 
            className="form-control text-center" 
            placeholder={props.placeholder}/>
        </div>
    )
};