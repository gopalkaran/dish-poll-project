import React, { useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DishList from './DishList';
import Nav from './Nav';
import PollList from './PollList';
import Dish from "./Dish";



const Dashboard = () => {
    
    const [selectionList, setSelectionList] = useState([]);


 
    return (
    <Router>
        <div>
            <Nav />
            <Switch>
              <Route path="/dashboard" exact component={DishList} />
              <Route path="/polllist" component={PollList} />
              <Route path='/:id' component={Dish} />
            </Switch>
        </div>
      </Router>
    )
}

export default Dashboard
