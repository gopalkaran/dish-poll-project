import React, {useEffect} from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import users from './userdb/users.json';


function App() {
  useEffect(() => {
    const dishes = JSON.parse(localStorage.getItem("dishes"))
    if(!dishes)
      fetchItems();
  }, [])

  const fetchItems =async () =>{
    const data = await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
    const dishes = await data.json();
    console.log(dishes);
    const modifiedList = dishes.map(dish => {
        return {...dish, pointsReceived : 0, voteCount: 0, votedBy : []}
    })
    localStorage.setItem('dishes', JSON.stringify(modifiedList));
}


useEffect(() => {
  const users = JSON.parse(localStorage.getItem("users"))
    if(!users)
      fetchUsers()
}, [])

const fetchUsers = () => {

  const modifiedList = users.map(user => {
    return {...user , voteCount : 0}
  })
  console.log(modifiedList)
  localStorage.setItem('users', JSON.stringify(modifiedList));
  
}


  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;