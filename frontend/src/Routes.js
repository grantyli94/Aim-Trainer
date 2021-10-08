import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Game from './Game';
import GameTracking from './GameTracking';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/classic">
        <Game />
      </Route>
      <Route exact path="/tracking">
        <GameTracking/>
      </Route>
      <Route exact path="/leaderboards">
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;