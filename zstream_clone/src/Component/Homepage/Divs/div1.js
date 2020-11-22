import React from "react";
import classes from "./../homepage.module.css"
function Div1 () {
    return(
        <div className={classes.div1}>
          <div>Welcome to Z Stream,</div>
          <div>India's first cloud gaming platform</div>
          <div className={classes.head1}>Join the Game</div>
          <button className={classes.explore}>Explore</button>
        </div>
    )
}

export default Div1;