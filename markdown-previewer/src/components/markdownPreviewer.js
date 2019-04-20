import React from "react";
import {
    Column,
    Grid,
    Row,
    Container,
    Form,
    Title,
    Previewer
} 
from "./index";

import ReactMarkdown from "react-markdown";

const markdownPreviewer = props => (
    <Container fluid bg-light>
        <Grid>
        <Row>
            <Column bg-success>
                <Title text-light>Previewer</Title>
                <Previewer>
                    <ReactMarkdown source={props.preview}/>
                </Previewer>
            </Column>

            <Column bg-dark>
                <Title text-light>Editor</Title>
                <Form onChange={props.onChange}/>
            </Column>
        </Row>
        </Grid>
    </Container>
);

export default markdownPreviewer;