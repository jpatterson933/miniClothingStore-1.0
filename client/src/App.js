import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import { Nav } from './components/Nav';


// views
import Home from './views/home';
import AddShirts from './views/shirts';
import AddPants from './views/pants';
import AddColors from './views/colors';


class App extends Component {
  render() {
    return (
      <div id="main">
        <Nav />
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add-shirts' exact component={AddShirts} />
            <Route path='/add-pants' exact component={AddPants} />
            <Route path='/add-colors' exact component={AddColors} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
