import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registrar from './pages/Registrar';

import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Registro" component={Registrar} />

                <Route path="/Perfil" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}
