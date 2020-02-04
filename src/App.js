import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' components={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
