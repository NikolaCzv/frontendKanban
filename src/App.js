import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import home from "./components/Home";

function App() {
  return (
    <Router>
          <Route exact path="/" component={home}/>
          <Route exact path="/login" component={home}/>
    </Router>
  );
}

export default App;
