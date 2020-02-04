import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
