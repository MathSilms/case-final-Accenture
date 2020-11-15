import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Pages
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Login from '../pages/login';
import Profile from '../pages/profile';
import PesquisaPassagens from '../pages/pesquisaPassagens';
import InfoPassagens from '../pages/infoPassagem';
import Viagens from '../pages/viagens';
//import Favoritos from '../pages/favoritos';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/passagens" exact component={PesquisaPassagens} />
        <Route path="/passagens/info" exact component={InfoPassagens} />

        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />

        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/profile" exact component={Profile} />
        <Route path="/dashboard/viagens" exact component={Viagens} />
        <Route path="/dashboard/favoritos" exact component={Dashboard} />

    </Switch>
)

export default Routes
