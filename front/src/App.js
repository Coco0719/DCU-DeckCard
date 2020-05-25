import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DeckCard from './pages/deckcard/DeckCard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import NotFound from './pages/errors/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DeckCard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
