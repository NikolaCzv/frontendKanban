import React from "react";
import { 
    Grid,
    Button,
    Form,
    Segment,
    Message
} from 'semantic-ui-react';
import { connect } from "react-redux";
import { login } from "../actions/user";

class Login extends React.Component{

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);
    }

    render(){
        return(
            <Grid.Column width={6}>
            <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                    <Form.Input 
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Username'
                        name="username"
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        onChange={this.handleChange}
                    />
                    <Button
                        color='blue'
                        fluid
                        size='large'
                        type="submit"
                        > Login </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='/signup'>Sign Up</a>
            </Message>
        </Grid.Column>
        )
    }

}

const mapDispacthToProps = dispatch => {
    return {
        login: user => { dispatch(login(user)) }
    }
}

export default connect(null, mapDispacthToProps)(Login)