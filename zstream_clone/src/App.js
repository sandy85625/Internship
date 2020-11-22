import React, {Component} from 'react';
import classes from './App.module.css';
import Navbar from './Component/Navbar/navbar';
import Homepage from './Component/Homepage/homepage';
import Games from './Component/Games/games';
import Footer from './Component/Footer/footer';
import {Route, Switch, Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/games" component={Games} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
