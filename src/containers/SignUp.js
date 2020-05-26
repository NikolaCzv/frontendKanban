import React from 'react';
import SignupForm from "../components/SignupForm";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2185d0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 100vh;
        overflow: hidden;
      }
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