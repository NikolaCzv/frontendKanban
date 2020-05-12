import React from 'react';
import SignupForm from "../components/SignupForm";
import { Grid } from "semantic-ui-react";

class SignUp extends React.Component {

    render(){
        return (
            <Grid
                textAlign='center'
                style={{ height: '100vh' }}
                verticalAlign='middle'>
                <Grid.Column width={3}></Grid.Column>
                <SignupForm />
                <Grid.Column width={3}></Grid.Column>
            </Grid>
        )
    }

}

export default SignUp