import React, {Component} from 'react';
import classes from './homepage.module.css';
import Div1 from "./Divs/div1"
import Div2 from "./Divs/div2"
import Div3 from "./Divs/div3"
import Div4 from "./Divs/div4"
import Div5 from "./Divs/div5"
import Div6 from "./Divs/div6"

class Homepage extends Component {
  render() {
    return (
      <div className={classes.Homepage}>
        <div className={classes.navSpace}></div>
        <Div1/>
        <Div2/>
        <Div3/>
        <Div4/>
        <Div5/>
        <Div6/>
        </div>
    );
  }
}

export default Homepage;
