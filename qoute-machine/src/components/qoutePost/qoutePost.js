import React, { 
  Fragment 
} 
from "react";

import { 
  Jumbotron, 
  Qoute, 
  Button, 
  Grid, 
  Row, 
  Column,
  Logo
} 
from "../bootstrap";

import {
  twitterLogo, 
  tumblerLogo
} 
from "../../resources/logos";

import {
  tumblerShareUrl,
  twitterShareUrl
} 
from "../../urls";

const qouteGenerator = props => {
    return (
      <Fragment>
        <Jumbotron title="Qoute of the day" width={"550px"}>
          <Qoute text={props.text} source={props.source}>
            By
          </Qoute>

          <Grid>
            <Row>
              <Column>         
                <Logo 
                src={twitterLogo} 
                link={twitterShareUrl}
                alt="publish to twitter"/>

                <Logo 
                src={tumblerLogo} 
                link={tumblerShareUrl}
                alt="publish to tumbler"/>

              </Column>

              <Column right>
                <Button name="New qoute" onClick={props.onClick}/>
              </Column>
            </Row>
          </Grid>     
        </Jumbotron>  
      </Fragment>  
    );
}

export default qouteGenerator;