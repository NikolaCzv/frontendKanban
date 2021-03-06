import React from "react";
import { Icon } from 'semantic-ui-react';
import Login from "../components/Login";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`

const LeftContent = styled.div`
    width: 70%;
    height: 100%;
    background-color: #2185d0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        height: 100%
      }
`

const RightContent = styled.div`
    width: 30%;
    padding: 0 10px;
    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;
      }
`

const Title = styled.div`
    color: #fff;
    font-size: 500%;
    @media (max-width: 768px) {
       position: relative;
       font-size: 250%;
    }
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