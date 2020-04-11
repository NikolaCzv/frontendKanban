import React from "react";
import { Form, Button, Segment, Grid} from "semantic-ui-react";
import history from "../actions/history";
import styled from "styled-components";

const Header = styled.div`
    margin: 300px 200px;
`

class SignupForm extends React.Component {

    render(){
        return (
          <Grid.Column width={10} textAlign='center' style={{ height: '100vh'}} color="blue">
            <Header>
            <Form size="large" style={{ maxWidth: 650 }} verticalAlign='middle'>
              <Segment stacked>
                <Form.Field fluid>
                  <label>Username</label>
                  <input placeholder='Username' />
                </Form.Field>
                <Form.Field fluid>
                  <label>Email</label>
                  <input placeholder='Email' type="email" />
                </Form.Field>
                <Form.Field fluid>
                  <label>Password</label>
                  <input placeholder='Password' type="password" />
                </Form.Field>
                <Form.Field fluid>
                  <label>Confirm Password</label>
                  <input placeholder='Password' type="password" />
                </Form.Field>
                <Button type='submit' color="twitter" >Submit</Button>
                <Button onClick={() => history.push("/")}>Back to Home</Button>
              </Segment>
          </Form>
          </Header>
        </Grid.Column>
        )
    }
}

export default SignupForm