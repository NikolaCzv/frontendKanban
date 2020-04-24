import React from "react";
import WithAuth from "../components/WithAuth";
import Navbar from "../components/Navbar";
import DashForm from "../components/DashForm";

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                <DashForm />
            </div>
        )
    }
} 

export default WithAuth(Dashboard)