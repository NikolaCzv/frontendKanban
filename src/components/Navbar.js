import React from "react";
import styled from "styled-components";
import history from "../actions/history";
import { connect } from "react-redux";
import { logout } from "../actions/user";
import {
  Icon,
  Button
} from "semantic-ui-react";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  -webkit-box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.75);
  margin-bottom: 25px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

const LogoWrapper = styled.div`
  width: 400px;
`;

const Logo = styled.h2`
  color: dodgerblue;
  margin: 20px;
`


class Header extends React.Component{

  handleLogout = () => {
    history.push("/");
    localStorage.clear();
    this.props.logout();
    alert('You are successfuly logged out!');
  }

    render(){
        return <Container>
                <LogoWrapper>
                  <Logo>
                    Kanban App <Icon name="pen square"/>
                  </Logo>
                </LogoWrapper>
                    <RightContent>
                      <Button color="red" onClick={this.handleLogout}>Log out</Button>
                    </RightContent>
                </Container>
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Header)