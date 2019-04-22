import React from 'react';

import {
    Jumbotron,
    VerticalLine,
    Display,
    Button,
    Grid
}
from "./bootstrap";

export default props => {
    const layout = [
        7,  8,   9,  " / ",
        4,  5,   6,  " X ",
        1,  2,   3,  " - ",
        0, ".", "=", " + "
    ];

    const buttons = value => {
        let onClickName;
        let color;

        value = value.toString().replace(/\s/gi, "");

        switch(value) {
            case "/":
                onClickName = "Divide";
            break;
            
            case "X":
                onClickName = "Multiple";
            break;

            case "-":
                onClickName = "Subtract";
            break;

            case "+":
                onClickName = "Add";
            break;

            case "=":
                onClickName = "Equal"
            break;

            case ".":
                onClickName = "Dot"
            break;

            default:
                onClickName = value;
        }
        
        switch(value) {
            case "/":
            case "X":
            case "-":
            case "+":
            case "=":
            case ".":
                color = "secondary"
            break;

            default:
                color = "primary";
        }

        return <Button key={value} color={color} name={value} onClick={props[`onClick${onClickName}`]}/>
    }

    return (
        <Jumbotron width="30rem" center>
            <Display text={props.setDisplay} indicator={
                <Button color="secondary"  name={props.currentlyUsedOperator}/>
            }>
                <Button color="secondary" onClick={props.onClickDelete} name="AC"/>
            </Display>
            
            <VerticalLine/>    
            
            <Grid columns={4}>
                {layout.map(buttons)}
            </Grid>
        </Jumbotron>
    );
};