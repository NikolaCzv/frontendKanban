import React from "react";
import WithAuth from "../components/WithAuth";
import Navbar from "../components/Navbar";
import DashForm from "../components/DashForm";
import CardHolder from "./CardHolder";
//fix refresh

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                <DashForm />
                <CardHolder />
            </div>
        )
    }
} 

export default WithAuth(Dashboard)