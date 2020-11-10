import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Pages
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Login from '../pages/login';
import Profile from '../pages/profile';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/cadastro" component={Cadastro} />
    </Switch>
)

export default Routes
