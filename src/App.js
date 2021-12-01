import React from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;