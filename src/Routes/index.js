import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../components/login'
import Home from '../components/home'
import AddNewRecord from '../components/AddNewRecord' 
import AppBar from '../components/AppBar'

function index() {
    return (
        <div>
        <AppBar />
        <Router>
            <Switch>
               <Route
                    exact
                    activeClassName
                    current
                    path='/'
                    component={Login}
                ></Route>

                <Route
                    exact
                    activeClassName
                    current
                    path='/home'
                    component={Home}
                ></Route>

                <Route
                    exact
                    activeClassName
                    current
                    path='/addRecord'
                    component={AddNewRecord}
                ></Route>
                {/* <Redirect from='/login' to='/' /> */}
            </Switch>
        </Router>
        </div>
    )
}

export default index;
