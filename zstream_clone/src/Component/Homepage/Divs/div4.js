import React from "react";
import classes from "./../homepage.module.css"
import img1 from './../../../Images/img3.png';
import img2 from './../../../Images/img4.png';
import img3 from './../../../Images/img5.png';

function Div4 () {
    return(
        <div className={classes.div4}>
          <br />
          <br />
          <br />
          <div className={classes.gamelibraries}>GAME LIBRARIES</div>
          <div style={{display: 'flex', marginLeft: '8rem'}}>
            <div className={classes.lib}>
              <div className={classes.imgBack1}>
                <img className={classes.imgs} src={img1} alt="Not Found" />
                <h2 style={{color: 'white'}}>Atactic</h2>
                <p style={{color: 'white'}}>Strategy</p>
              </div>
              <div style={{marginTop: '2.5rem', fontSize: '18px'}}>
                Coming Soon
              </div>
              <button className={classes.play}>Play Now</button>
            </div>
            <div className={classes.lib}>
              <div className={classes.imgBack2}>
                <img className={classes.imgs} src={img2} alt="Not Found" />
                <h2 style={{color: 'white'}}>Dragons Lair</h2>
                <p style={{color: 'white'}}>Adventure</p>
              </div>
              <div style={{marginTop: '2.5rem', fontSize: '18px'}}>
                Coming Soon
              </div>
              <button className={classes.play}>Play Now</button>
            </div>
            <div className={classes.lib}>
              <div className={classes.imgBack3}>
                <img className={classes.imgs} src={img3} alt="Not Found" />
                <h2 style={{color: 'white'}}>The Unknown</h2>
                <p style={{color: 'white'}}>RPG</p>
              </div>
              <div style={{marginTop: '2.5rem', fontSize: '18px'}}>
                Coming Soon
              </div>
              <button className={classes.play}>Play Now</button>
            </div>
          </div>
        </div>
        
    )
}

export default Div4;