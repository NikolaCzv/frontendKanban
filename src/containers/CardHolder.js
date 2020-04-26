import React from "react";
import { Grid } from "semantic-ui-react";
import Card from "../components/Card";

class CardHolder extends React.Component{
    render(){
        return (
        <div className="cardHolder">
            <Grid>
                <Grid.Column width={3}>
                    <Card />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card />  
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Card />
                </Grid.Column>
            </Grid>
        </div>
    )}
}

export default CardHolder;