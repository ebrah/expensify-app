import React from 'react';
import {BrowserRouter ,Switch, Route } from 'react-router-dom';


import ExpensifyDashboard from './ExpensifyDashboard';
import CreateExpense from './createExpense';
import EditExpense from './EditExpense';
import HelpExpense from './HelpExpense';
import Notfound from './NotFound';
import Header  from './Header';


const Rout = () => (
    <div>
        <BrowserRouter>
            <div>
            <Header/>
                <Switch>
                    <Route path="/" component={ExpensifyDashboard} exact={true}/>
                    <Route path="/create" component={CreateExpense}/>
                    <Route path="/edit/:id" component={EditExpense} />
                    <Route path="/help" component={HelpExpense} />
                    <Route component = {Notfound} />
                </Switch>
            </div>    
        </BrowserRouter>
    </div>
);

export default Rout;
