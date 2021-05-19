import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/cadastro" component={Cadastro} />
    </Switch>
</BrowserRouter>,
  document.getElementById('root')
);
