import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from './pages/shop/shop';
import Header from './components/header/header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
