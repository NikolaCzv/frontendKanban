import React from "react";
import WithAuth from "../components/WithAuth";

class Dashboard extends React.Component {

    render(){
        return(
            <h1>Dash</h1>
        )
    }
} 

export default WithAuth(Dashboard)