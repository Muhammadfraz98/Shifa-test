import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/login';
import Home from '../components/home';
import AddNewRecord from '../components/AddNewRecord' 
import AppBar from '../components/AppBar';
import SignUp from '../components/Signup';


function BaseRouter() {
    return (
        <div>
        <Router>
        <AppBar />
            <Switch>
               <Route
                    exact
                    path='/'
                    component={Login}
                ></Route>
                 <Route
                    exact
                    path='/signup'
                    component={SignUp}
                ></Route>
                <Route
                    exact
                    path='/home'
                    component={Home}
                ></Route>

                <Route
                    exact
                    path='/addRecord'
                    component={AddNewRecord}
                ></Route>
                {/* <Redirect from='/login' to='/' /> */}
            </Switch>
        </Router>
        </div>
    )
}

export default BaseRouter;

