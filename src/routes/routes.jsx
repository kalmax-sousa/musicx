import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CadastroVideo from '../pages/cadastro/Video';
import CadastroCategoria from '../pages/cadastro/Categoria';
import EditCategory from '../pages/EditCategory';
import Page404 from '../pages/Page404';

const Routes = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route path="/editar/categoria/:id" component={EditCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
