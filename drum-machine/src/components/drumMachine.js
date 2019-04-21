import React from "react";

import {
    Button,
    Grid,
    Range,
    TgButton,
    SoundViewer,
    Container
  }
  from "./index";

export default props => (
    <Container>
        <Grid columns={1}>
            <Grid columns={2}>
                <TgButton setValue={props.setPowerValue} onClick={props.onClickPower} label="power"/>
                <TgButton setValue={props.setBankValue} onClick={props.onClickBank} label="bank"/>
            </Grid>
            <Range onChange={props.onVolumeChange} value={props.volumeValue}/>
            <SoundViewer name={props.soundType}/>
        </Grid>

        <Grid>
            <Button onClick={props.onClickQ} name="q"/>
            <Button onClick={props.onClickW} name="w"/>
            <Button onClick={props.onClickE} name="e"/>

            <Button onClick={props.onClickA} name="a"/>
            <Button onClick={props.onClickS} name="s"/>
            <Button onClick={props.onClickD} name="d"/>

            <Button onClick={props.onClickZ} name="z"/>
            <Button onClick={props.onClickX} name="x"/>
            <Button onClick={props.onClickC} name="c"/>
        </Grid>
    </Container>
);