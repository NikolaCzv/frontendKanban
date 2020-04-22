import React from "react";
import WithAuth from "../components/WithAuth";
import Navbar from "../components/Navbar"

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                <h1>Dash</h1>
            </div>
        )
    }
} 

export default WithAuth(Dashboard)