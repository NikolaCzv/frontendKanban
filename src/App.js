import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import home from "./containers/Home";
import dashboard from "./containers/Dashboard"

function App() {
  return (
    <Router>
          <Route exact path="/" component={home}/>
          <Route exact path="/login" component={home}/>
          <Route exact path="/dashboard" component={dashboard} />
    </Router>
  );
}

export default App;
