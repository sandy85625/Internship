import React from "react";
import Vid1 from "./videos/Vid1.mp4";
import Vid4 from "./videos/Vid4.mp4";
import Vid5 from "./videos/Vid5.mp4";
import vid3 from "./videos/vid3.mp4";


const OuterContent = () =>{
    return(
        <div id="content_outer_wrapper">
        <div id="content_inner_wrapper">
          <div id="content" data-content-context="home">
            <div id="page_background_videos">
              <video playsinline muted class="background_video">
                <source
                  class="fullsize"
                  src= {Vid4}
                  type="video/mp4"
                />

                <source
                  class="mobile"
                  src={Vid4}
                  type="video/mp4"
                />
              </video>
              <video playsinline muted class="background_video">
                <source
                  class="fullsize"
                  src={vid3}
                  type="video/mp4"
                />

                <source
                  class="mobile"
                  src={vid3}
                  type="video/mp4"
                />
              </video>
              <video playsinline muted class="background_video">
                <source
                  class="fullsize"
                  src={Vid1}
                  type="video/mp4"
                />
                <source
                  class="mobile"
                  src={Vid1}
                  type="video/mp4"
                />
              </video>
            </div>

            <section id="jobs" class="job_skills full_bleed">
              <div class="section_inner_wrapper">
                <div class="search_form_wrapper">
                  <div class="row search_header">
                    <div class="col_6 job_skills_title">
                      <h3>
                        <a href="https://www.zstream.in/games"
                          >Welcome to Z Stream, India's first cloud gaming
                          platform</a
                        >
                      </h3>
                      <p>
                        No more <b style={{fontSize: 'larger'}}>Downloads </b> 
                        <b style={{fontSize: 'larger'}}>Installs</b> or
                        <b style={{fontSize: 'larger'}}> Setups</b>
                        <br />
                        <b style={{fontSize: 'larger'}}>Browse</b> and
                        <b style={{fontSize: 'larger'}}> Play</b> all your favorite
                        Games in less than a minute
                      </p>
                    </div>
                    <div class="col_5 col_offset_1 search_form">
                      <form>
                        <input type="text" placeholder="Search" />
                        <button type="button" class="clear_button">
                          Clear
                        </button>
                        <button class="search_button">Search</button>
                      </form>
                    </div>
                  </div>
                  <div class="search_form_results_wrapper">
                    <div class="search_form_results_inner_wrapper">
                      <div class="search_form_results job_openings">
                        <div class="row"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col_12">
                    <ul class="job_tags">
                      <li class="job_tag" data-job_cat="art">
                        <a href="/#">Explore</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/games">
                                      <h5 class="job_title">Atatic</h5>
                                    </a>
                                  </div>

                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/games">
                                      <h5 class="job_title">Dragons Lawn</h5>
                                    </a>
                                  </div>

                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/games">
                                      <h5 class="job_title">Martian Quest</h5>
                                    </a>
                                  </div>

                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/games">
                                      <h5 class="job_title">The Unknown</h5>
                                    </a>
                                  </div>
                                </div>
                                <div class="row"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="audio">
                        <a href="/#">Featured</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/blogs">
                                      <h5 class="job_title">
                                        <b style={{fontSize: 'larger'}}>Aurora</b>
                                        <br />
                                        Aurora is a Artificial Intelligence
                                        based render engine powering the Z
                                        Stream which means slow internet won't
                                        make you go crazy.
                                      </h5>
                                      <button class="button">Learn More</button>
                                      <video width="240" height="240" autoplay>
                                        <source
                                          src={Vid5}
                                          type="video/mp4"
                                        />
                                      </video>
                                    </a>
                                  </div>

                                  <div class="job_opening col_3"></div>

                                  <div class="job_opening col_3"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="business-development">
                        <a href="/#">Open Positions</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a
                                      href="https://www.linkedin.com/posts/sandeep-k-12b546173_webdevelopment-findapro-javascript-activity-6724305842230980608-HRM4"
                                    >
                                      <h5 class="job_title">Creative Genius</h5>
                                    </a>
                                  </div>

                                  <div class="job_opening col_3">
                                    <a
                                      href="https://www.linkedin.com/posts/sandeep-k-12b546173_webdevelopment-findapro-javascript-activity-6724305842230980608-HRM4"
                                    >
                                      <h5 class="job_title">
                                        Marketing Genius
                                      </h5>
                                    </a>
                                  </div>

                                  <div class="job_opening col_3">
                                    <a
                                      href="https://www.linkedin.com/posts/sandeep-k-12b546173_webdevelopment-findapro-javascript-activity-6724305842230980608-HRM4"
                                    >
                                      <h5 class="job_title">Data Scientist</h5>
                                    </a>
                                  </div>
                                  <div class="job_opening col_3">
                                    <a
                                      href="https://www.linkedin.com/posts/sandeep-k-12b546173_webdevelopment-findapro-javascript-activity-6724305842230980608-HRM4"
                                    >
                                      <h5 class="job_title">HR</h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="data-science">
                        <a href="/#">Blog</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/blogs">
                                      <h5 class="job_title">
                                        <button class="button">
                                          Read Here
                                        </button>
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="facilities">
                        <a href="/#">About Us</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a href="https://www.zstream.in/company">
                                      <h5 class="job_title">
                                        <button class="button">Our Crew</button>
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="finance">
                        <a href="/#">Contact</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a href="/#">
                                      <h5 class="job_title">
                                        iEDC, NSS College Of Engineering,
                                        Palakkad, Kerala, India, 678008 E-Mail:
                                        contact@zstream.in Tel: +919446033872
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="hardware-engineering">
                        <a href="/#">Subscribe Now</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="job_tag" data-job_cat="human-resources">
                        <a href="/#">Follow Us</a>
                        <div class="job_openings_wrapper">
                          <div class="job_openings_inner_wrapper row">
                            <div class="col_12">
                              <div class="job_openings">
                                <div class="row">
                                  <div class="job_opening col_3">
                                    <a
                                      href="https://www.facebook.com/zstreamofficial"
                                    >
                                      <h5 class="job_title">
                                        <a href="/#" class="fa fa-facebook"></a>
                                      </h5>
                                    </a>
                                  </div>
                                  <div class="job_opening col_3">
                                    <a href="/#">
                                      <h5 class="job_title">
                                        <a href="/#" class="fa fa-twitter"></a>
                                      </h5>
                                    </a>
                                  </div>
                                  <div class="job_opening col_3">
                                    <a
                                      href="https://www.instagram.com/zstreamofficial/"
                                    >
                                      <h5 class="job_title">
                                        <a href="/#" class="fa fa-instagram"></a>
                                      </h5>
                                    </a>
                                  </div>
                                  <div class="job_opening col_3">
                                    <a href="/#">
                                      <h5 class="job_title">
                                        <a href="/#" class="fa fa-youtube"></a>
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer class="main_footer">
            <div class="main_footer_inner_wrapper">
              <div class="row">
                <div class="col_2">
                  <h5 class="business_name">
                    <a href="https://www.zstream.in/company">Z Stream</a>
                  </h5>
                </div>
                <div class="col_6 col_offset_1 footer_nav_wrapper">
                  <nav class="footer_nav">
                    <ul>
                      <li>
                        Contact
                        <ul>
                          <li>
                            <a href="/#">People</a>
                          </li>
                          <li>
                            <a href="/#">Press Inquiries</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Stuff
                        <ul>
                          <li>
                            <a href="https://www.zstream.in/company"
                              >About Us</a
                            >
                          </li>
                          <li>
                            <a href="/#">Jobs</a>
                          </li>
                          <li>
                            <a href="https://www.zstream.in/blogs"
                              >Publications</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        More Stuff
                        <ul>
                          <li>
                            <a href="/#">Site Terms of Use</a>
                          </li>
                          <li>
                            <a href="/#">Security</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col_3 footer_steam_logos">
                  <div class="steam_logo">By</div>
                  <div class="steamworks_logo">Amal Zorba</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )

}
export default OuterContent;