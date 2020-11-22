import React, {Component} from 'react';
import classes from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

class Navbar extends Component {
  render() {
    return (
      <div className={classes.navbar}>
        <div className={classes.name}>Z STREAM</div>
        <div className={classes.menu}>
          <NavLink
            to="/"
            exact
            activeClassName={classes.active}
            className={`${classes.home} ${classes.menuElem}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            activeClassName={classes.active}
            className={`${classes.games} ${classes.menuElem}`}
          >
            Games
          </NavLink>
          <div className={`${classes.more} ${classes.dropDown}`}>More</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
