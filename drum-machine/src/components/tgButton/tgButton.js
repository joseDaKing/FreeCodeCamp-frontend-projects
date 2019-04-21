import React, {
    useEffect,
    useRef
} 
from "react";

import {
    Grid
}
from "../index";

import "./tgButton.css";

export default props => {
    const styles = {
        margin: "0px"
    };

    const input = useRef(null);

    useEffect(() => {
        input.current.checked = props.setValue;
    });

    return (
        <div>
            <Grid columns={2}>
                <label 
                className="tg-btn__label text-right text-primary text-uppercase">
                    {props.label}
                </label>
                <label className="tg-btn__label" style={styles}> 
                    <input ref={input} className="tg-btn__checkbox" type="checkbox"/>
                    <div onClick={props.onClick} className="tg-btn">
                        <span className="tg-btn__slider"></span>
                    </div>
                </label>
            </Grid>
        </div>
    );
}