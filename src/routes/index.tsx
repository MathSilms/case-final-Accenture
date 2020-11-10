import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Pages
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Passagens from '../pages/passagens';
import InfoPassagens from '../pages/infoPassagem';
import Viagens from '../pages/viagens';
import Favoritos from '../pages/favoritos';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/passagens" component={Passagens} />
        <Route path="/passagens/info" component={InfoPassagens} />

        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/viagens" component={Viagens} />
        <Route path="/dashboard/favoritos" component={Favoritos} />

    </Switch>
)

export default Routes
