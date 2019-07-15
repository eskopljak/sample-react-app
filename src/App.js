import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Boards from './components/boards'
import Header from './components/header'
import BoardDetails from './components/boardDetails'

import './styles/main.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Boards} />
          <Route path="/b/:id" component={BoardDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
