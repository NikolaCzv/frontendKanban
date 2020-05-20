import React from "react";
import { Grid, Icon } from 'semantic-ui-react';
import Login from "../components/Login";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`

const LeftContent = styled.div`
    width: 70%;
    height: 100%;
    background-color: #2185d0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RightContent = styled.div`
    width: 30%;
    padding: 0 10px;
`

const Title = styled.div`
    color: #fff;
    font-size: 500%;
`

class Home extends React.Component{

    render(){
        return(
            <Container>
                <LeftContent>
                            <Title> Welcome to Kanban <Icon name="pen square" /> </Title>
                </LeftContent>
                <RightContent>
                    <Login />
                </RightContent>
            </Container>
        )
    }

}

export default Home