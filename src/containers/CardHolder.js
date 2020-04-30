import React from "react";
import { Grid } from "semantic-ui-react";
import Card from "../components/Card";

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
        <div className="cardHolder">
            <Grid>
                <Grid.Column width={3}>
                    <Card 
                        title={this.state.first.title}
                        position={this.state.first.position}/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card 
                        title={this.state.second.title}
                        position={this.state.second.position}/>  
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card 
                        title={this.state.third.title}
                        position={this.state.third.position}/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card 
                        title={this.state.forth.title}
                        position={this.state.forth.position}/>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card
                        title={this.state.fifth.title}
                        position={this.state.fifth.position}/>
                </Grid.Column>
            </Grid>
        </div>
    )}
}

export default CardHolder;