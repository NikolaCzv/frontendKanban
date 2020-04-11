import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from "./actions/history";
import home from "./containers/Home";
import dashboard from "./containers/Dashboard";
import signUp from "./containers/SignUp";


class App extends React.Component {

  render(){
    return (
      <div>
        <Router history={history}>
          <Route exact path="/" component={home}/>
          <Route exact path="/login" component={home}/>
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/signup" component={signUp} />
        </Router>
      </div>
    );
  }
}

export default App;
