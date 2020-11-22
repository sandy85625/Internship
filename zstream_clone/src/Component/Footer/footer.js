import React, {Component} from 'react';
import classes from './footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes.foot1}>
          <div className={classes.subs}>SUBSCRIBE OUR NEWS LETTER</div>
          <div className={classes.p}>
            Be the first to know about new games, exclusive previews & special
            promotions
          </div>
          <form>
            <input
              className={classes.email}
              type="email"
              name="email"
              placeholder="Email Address"
              required
            ></input>
            <br />
            <button className={classes.submit} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className={classes.foot2}>
          <div className={classes.foot2_1}>
            <div className={classes.heading}>Z STREAM</div>
            <div className={classes.elem}>© 2020 | All rights reserved</div>
            <div className={classes.elem}>Z Stream,</div>
            <div className={classes.elem}>Evoura Technologies Pvt Ltd,</div>
            <div className={classes.elem}>Palakkad, Kerala, India</div>
          </div>
          <div className={classes.foot2_2}>
            <div className={classes.heading}>Contact</div>
            <div className={classes.elem}>iEDC, NSS College Of Engineering,</div>
            <div className={classes.elem}>Palakkad, Kerala,</div>
            <div className={classes.elem}>India, 678008</div>
            <div className={classes.elem}>E-mail: contact@zstream.in</div>
            <div className={classes.elem}>Tel: +919446033872</div>
          </div>
          <div className={classes.foot2_3}>
            <div className={classes.heading}>Quick Menu</div>
            <div className={classes.elem}>Games</div>
            <div className={classes.elem}>Company</div>
            <div className={classes.elem}>Carrers</div>
            <div className={classes.elem}>Contact</div>
          </div>
          <div className={classes.foot2_4}>
            <div className={classes.heading}>Socials</div>
            <div className={classes.elem}>Facebook</div>
            <div className={classes.elem}>Instagram</div>
            <div className={classes.elem}>Twitter</div>
            <div className={classes.elem}>YouTube</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
