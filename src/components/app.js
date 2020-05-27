import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './navigation/navigation';
// import Home from './navigation/home';
import About from './navigation/about';
import Work from './navigation/work';
// import Shop from './navigation/shop';
import Contact from './navigation/contact';

import Layout from './layout';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            {/* <Route path="/shop" component={Shop} /> */}
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return (
  <div>
    <Layout />
  </div>
  )
}

export default App;