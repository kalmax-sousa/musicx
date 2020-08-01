import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import CadastroVideo from '../pages/cadastro/Video';
import CadastroCategoria from '../pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

const Routes = () => (

    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/Categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;