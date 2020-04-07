import React from "react";
import { Grid, Button, Form, Segment, Message, Icon } from 'semantic-ui-react';
import styled from "styled-components";

const Header = styled.div`
    font-size: 80px;
    margin: 400px 0px;
`

class Home extends React.Component{

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state.email)
    }

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' color="blue">
                <Grid.Column width={10} style={{height: '102%'}} color="blue">
                    <Header>Welcome to Kanban <Icon name="pen square" /> </Header>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input 
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                                name="email"
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
                                onClick={this.handleSubmit}
                                > Login </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='/signup'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }

}

export default Home