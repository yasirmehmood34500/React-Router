import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Name from './Name'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Name} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
