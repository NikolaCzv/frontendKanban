import React from "react";
import { checkUser } from "../actions/user";
import { connect } from "react-redux";
import history from "../actions/history"

export default function WithAuth(WrappedComponent){
    class Auth extends React.Component{

        componentDidMount(){
            const token = localStorage.getItem("token")

            if(!token){
                history.push("/login")
                alert('You must be logged in to enter the page!')
            } else {
                this.props.checkUser(token)
            }
        }

        render(){
            return < WrappedComponent {...this.props} />
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            checkUser: user => dispatch(checkUser(user))
        }
    }
return connect(null, mapDispatchToProps)(Auth)
}
