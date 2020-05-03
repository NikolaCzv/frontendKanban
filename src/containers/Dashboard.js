import React from "react";
import WithAuth from "../components/WithAuth";
import Navbar from "../components/Navbar";
import DashForm from "../components/DashForm";
import CardHolder from "./CardHolder";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(WithAuth(Dashboard))