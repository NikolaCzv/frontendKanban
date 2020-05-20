import React from 'react';
import SignupForm from "../components/SignupForm";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2185d0;
    display: flex;
    align-items: center;
    justify-content: center;
`

class SignUp extends React.Component {

    render(){
        return (
            <Container>
                <SignupForm />
            </Container>
        )
    }

}

export default SignUp