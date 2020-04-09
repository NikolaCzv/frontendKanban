import React from "react";
import { Grid, Icon } from 'semantic-ui-react';
import styled from "styled-components";
import Login from "../components/Login";

const Header = styled.div`
    font-size: 80px;
    margin: 400px 0px;
`

class Home extends React.Component{

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' color="blue">
                <Grid.Column width={10} style={{height: '102%'}} color="blue">
                    <Header>Welcome to Kanban <Icon name="pen square" /> </Header>
                </Grid.Column>
                <Login />
            </Grid>
        )
    }

}

export default Home