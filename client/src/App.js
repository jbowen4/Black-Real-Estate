import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './layout/Home';
import Browse from './layout/Browse';
import Register from './layout/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/form" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
