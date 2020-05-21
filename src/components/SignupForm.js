import React from "react";
import history from "../actions/history";
import styled from "styled-components";
import { connect } from "react-redux";
import { signUp } from "../actions/user";
import { 
      Form,
      Button,
      Segment
    } from "semantic-ui-react";

const Container = styled.div`
    margin: 300px 200px;
`

class SignupForm extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = () => {
    this.props.signUp(this.state);
  }

    render(){
        return (
          <Container>
            <Form
              size="large"
              style={{ maxWidth: 650 }}
              verticalAlign='middle'
              onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Field fluid>
                  <label>Username</label>
                  <input
                    placeholder='Username'
                    name="username"
                    onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field fluid>
                  <label>Email</label>
                  <input
                    placeholder='Email'
                    type="email"
                    name="email"
                    onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field fluid>
                  <label>Password</label>
                  <input
                    placeholder='Password'
                    type="password"
                    name="password"
                    onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field fluid>
                  <label>Confirm Password</label>
                  <input
                    placeholder='Password'
                    type="password"
                    name="password_confirmation"
                    onChange={this.handleChange}/>
                </Form.Field>
                <Button type='submit' color="twitter" >Confirm</Button>
                <Button onClick={() => history.push("/")}>Back to Home</Button>
              </Segment>
          </Form>
        </Container>
        )
    }
}

const mapDispetchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user))
  }
}

export default connect(null, mapDispetchToProps)(SignupForm)