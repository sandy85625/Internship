import React, {Component} from 'react';
import classes from './games.module.css';
import img6 from './../../Images/img3.png';
import img7 from './../../Images/img5.png';
import img8 from './../../Images/img4.png';
import img9 from './../../Images/img10.png';

class Games extends Component {
  render() {
    return (
      <div className={classes.games}>
        <div className={classes.navSpace}></div>
        <div className={classes.heading}>Game Library</div>
        <div className={classes.p}>We got a huge library : )</div>
        <div className={classes.games_2}>
          <div className={classes.gimg6}>
            <div className={classes.img}>
              <img src={img6} alt={'Not Found'} />
              <h1 style={{color: 'white', margin:"1rem" , marginLeft:"7rem"}}>Atactic</h1>
              <p style={{color: 'white', marginLeft:"7rem"}}>Coming Soon</p>
            </div>
          </div>
          <div className={classes.gimg7}>
            <div className={classes.img}>
              <img src={img7} alt={'Not Found'} />
              <h1 style={{color: 'white', margin:"1rem" , marginLeft:"4rem"}}>The Unknown</h1>
              <p style={{color: 'white', marginLeft:"4rem"}}>Coming Soon</p>
            </div>
          </div>
          <div className={classes.gimg8}>
            <div className={classes.img}>
              <img src={img8} alt={'Not Found'} />
              <h1 style={{color: 'white', margin:"1rem" , marginLeft:"4rem"}}>Dragons Lair</h1>
              <p style={{color: 'white', marginLeft:"4rem"}}>Coming Soon</p>
            </div>
          </div>
          <div className={classes.gimg9}>
            <div className={classes.img}>
              <img src={img9} alt={'Not Found'} />
              <h1 style={{color: 'white', margin:"1rem" , marginLeft:"4rem"}}>Martian Quest</h1>
              <p style={{color: 'white', marginLeft:"4rem"}}>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
