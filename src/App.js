import React from 'react';
import './css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main}>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
