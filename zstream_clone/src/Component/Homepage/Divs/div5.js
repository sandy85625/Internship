import React from "react";
import classes from "./../homepage.module.css"
function Div5 () {
    return(
        <div className={classes.div5}>
          <div className={classes.about}>About us</div>
          <div className={classes.aboutUs}>
            Z Stream is a subsidiary of Evoura Technologies, an Artificial
            Intelligence startup based in India. We proudly presents, Z
            Streaming Platform. You can play any game of your choice in Web
            Browser itself with Z Stream.
          </div>
          <button className={classes.learnMore}>Learn More</button>
          <div className={classes.excited}>Excited ?</div>
          <div style={{marginLeft: '5rem', fontSize: '23px'}}>
            Subscribe Now!!
          </div>
          <button
            className={classes.explore}
            style={{marginLeft: '7rem', marginTop: '4rem'}}
          >
            {'>'}
          </button>
        </div>
        
    )
}

export default Div5;