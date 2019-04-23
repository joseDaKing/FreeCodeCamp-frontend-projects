import React,{
    Fragment
} 
from "react";

import Input from "./bootstrap/input";
import Grid from "./bootstrap/grid";
import Button from "./bootstrap/button";
import ButtonGroup from "./bootstrap/buttonGroup";
import Jumbotron from "./bootstrap/jumbotron";
import Display from "./bootstrap/display";
import Title from "./bootstrap/title";

export default props => {
    const styles = {
        width: "100%",
        maxWidth:"42rem",
        margin: "auto"
    };

    return (
        <Fragment>
            <Jumbotron>
                <div style={styles}>
                    <Grid>
                        <Grid size="2" gapY="0px">
                            <Input onChange={props.onChangeBreakLength} 
                            label="Break length in minutes and seconds" 
                            placeholder="in minutes" type="time"/>

                            <Input onChange={props.onChangeSessionLength} 
                            label="Session length in minutes and seconds" 
                            placeholder="in minutes" type="time"/>
                        </Grid>
                        
                        <hr className="my-2"/>

                        <ButtonGroup>
                            <Button onClick={props.onClickStart} name="Start" success/>
                            <Button onClick={props.onClickStop} name="Stop" danger/>
                            <Button onClick={props.onClickContinue} name="Continue" warning/>
                            <Button onClick={props.onClickReset} name="Reset" primary/>
                        </ButtonGroup>
                    </Grid>
                </div>
            </Jumbotron>
            
            <Title name={props.indicator}/>
            <Display>
                {props.display}
            </Display>
        </Fragment>
    );
}