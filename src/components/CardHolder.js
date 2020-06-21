import React from "react";
import Card from "./Card";
import { Divider } from "semantic-ui-react"
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        height: 320vh;
        display: block;
        align-items: center;
      }
    `

class CardHolder extends React.Component{
    state = {
        first: { title: "To Do", position: 1 },
        second: { title: "In Progress", position: 2},
        third: { title: "Ready For Review", position: 3 },
        forth: { title: "Blocked", position: 4 },
        fifth: {title: "Done", position: 5 }
    }

    render(){
        return (
            <Container>
                    <Card 
                        title={this.state.first.title}
                        position={this.state.first.position}/>
                        <Divider hidden />
                    <Card 
                        title={this.state.second.title}
                        position={this.state.second.position}/>  
                        <Divider hidden />
                    <Card 
                        title={this.state.third.title}
                        position={this.state.third.position}/>
                        <Divider hidden />
                    <Card 
                        title={this.state.forth.title}
                        position={this.state.forth.position}/>
                        <Divider hidden />
                    <Card
                        title={this.state.fifth.title}
                        position={this.state.fifth.position}/>
            </Container>
    )}
}

export default CardHolder;