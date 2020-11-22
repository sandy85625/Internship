import React from "react";
import classes from "./../homepage.module.css"
function Div2 () {
    return(
        <div className={classes.div2}>
          <div>No more Downloads, Installs or Setup</div> <br />
          <div>
            Browse and Play all your favorite Games in less than a minute
          </div>
          <div className={classes.div2_1}>
            <div className={classes.featured}>FEATURED</div>
            <div className={classes.aurora_video}>
              <video
                className={classes.video}
                width="400"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline
              >
                <source
                  src="https://video.wixstatic.com/video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className={classes.aurora_p}>
                <div className={classes.aurora}>Aurora</div>
                <p className={classes.p}>
                  Aurora is a Artificial Intelligence based render engine
                  powering the Z Stream which means slow internet won't make you
                  go crazy.
                </p>
                <button className={classes.learnMore}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Div2;