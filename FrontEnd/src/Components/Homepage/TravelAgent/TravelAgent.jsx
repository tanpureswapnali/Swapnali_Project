import React from 'react';
import '../TravelAgent/TravelAgent.css';

function TravelAgent() {
  return (
    <div>

<div>
      <nav className="navbar navbar-expand-md navbar-light bg-light p-2">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="https://i.pinimg.com/736x/d4/b9/96/d4b996f742150807d50be078dbae1bf9.jpg" alt="Holidify Logo" className="brand-logo travel-image" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#whyHolidify" className="nav-link">Why Tour&Guide</a>
              </li>
              <li className="nav-item">
                <a href="#leadPricing" className="nav-link">Lead Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#howItWorks" className="nav-link">How it works</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Agents</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">FAQs</a>
              </li>
              
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <div className="call-us-back">
              <span className="text-span">Call Us</span><br />
              +91-8080809161
            </div>
            <a href="/register" className="btn btn-primary">Sign Up</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      </div>


      <div className="hero-01">
        <div className="container-large"></div>
        <div className="header-contact-a">
          <div className="content-form">
            <div>
              <strong className="form-heading">Travel Agent Registration</strong>
            </div>
            <div className="form-block-contact w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="62f1ed2937f05dfa3101559d"
                data-wf-element-id="2676fa73-c3c4-7b32-24b3-7c55bd3ed664"
                aria-label="Email Form"
              >
                <div className="input-wrapper">
                  <label htmlFor="phone" className="field-label">Name</label>
                  <input
                    type="tel"
                    className="input-field w-input"
                    maxLength="256"
                    name="phone"
                    data-name="phone"
                    placeholder="Enter Name"
                    id="phone"
                    required=""
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="phone" className="field-label">Phone</label>
                  <input
                    type="tel"
                    className="input-field w-input"
                    maxLength="256"
                    name="phone"
                    data-name="phone"
                    placeholder="Enter Phone"
                    id="phone"
                    required=""
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email" className="field-label">Email</label>
                  <input
                    type="email"
                    className="input-field w-input"
                    maxLength="256"
                    name="email"
                    data-name="email"
                    placeholder="Email Address"
                    id="email"
                    required=""
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="phone" className="field-label">Company-Name</label>
                  <input
                    type="tel"
                    className="input-field w-input"
                    maxLength="256"
                    name="phone"
                    data-name="phone"
                    placeholder="Company Name"
                    id="phone"
                    required=""
                  />
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    value="Get Callback"
                    data-wait="Please wait..."
                    className="submit-button-dark-full w-button"
                  />
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="section-client-02">
        <div className="container-large">
          <div className="client-stat-wrapper">
            <div className="stats-block">
              <div className="heading-heading-small">founded in</div>
              <strong className="form-heading">2023</strong>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div id="whyHolidify">
          <div className="container">
            <h3 className="heading-2">Designed to help you grow your travel business</h3>
            <div className="w-layout-grid grid-full-feature-wrapper">
              <div>
                <div className="wrapper">
                  <div className="card">
                    <h1>
                      <span className="enclosed">10+</span>State Covered
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid grid-feature-small">
                <div className="header-contact">
                  <div className="card-feature-small">
                    <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24c91e54e01f79f5445d5_cloud.svg" loading="lazy" alt="" className="image-3" />
                    <div className="feature-heading">100% Phone Verified</div>
                    <p className="body-normal">We talk to each lead and verify travel intent for each traveller that we connect with you.</p>
                  </div>
                </div>

                <div className="header-contact">
                  <div className="card-feature-small">
                    <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24d9bfde2c278cfa45864_grad-cap.svg" loading="lazy" alt="" className="image-4" />
                    <div className="feature-heading">Highest Conversion Rates</div>
                    <p className="body-normal">Most of the agents who work with us see a conversion rate of above 8%</p>
                  </div>
                </div>

                <div className="header-contact">
                  <div className="card-feature-small">
                    <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24e39df0438c42beb79cf_tag.svg" loading="lazy" alt="" className="image-5" />
                    <div className="feature-heading">0% Commission On Sales</div>
                    <p className="body-normal">Sell directly to your customers with your own pricing & branding and maximise your returns.</p>
                  </div>
                </div>

                <div className="header-contact">
                  <div className="card-feature-small">
                    <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24e8613f471237abc08e7_visiting-card.svg" loading="lazy" alt="" className="image-6" />
                    <div className="feature-heading">Grow Your Brand</div>
                    <p className="body-normal">Get free profile & listing on the website and use review manager to collect reviews and grow your brand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns w-row">
        <div className="column w-col w-col-7">
          <h5 className="heading-3">Get 10% bonus credits Free</h5>
          <ul role="list" className="list">
            <li className="list-item">On your first credits purchase</li>
            <li className="list-item-2">Earn free credits when you refer other agents also</li>
          </ul>
        </div>
        <div className="column-2 w-col w-col-5">
          <a href="/register" className="button holidifybutton w-button">Register Now</a>
        </div>
      </div>

      <div id="leadPricing" className="header-pricing-02">
        <div className="container">
          <div className="title-wrapper-centre">
            <h1 className="hero-title text-color-white">
              Lead pricing &amp; delivery that<br />
              <span className="underline lead-prcing-h2">works for you.</span>
            </h1>
          </div>
          <div className="price-wrapper">
            <div
              data-current="Tab 2"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="tabs w-tabs"
            >
              <div className="tabs-content w-tab-content">
                <div
                  data-w-tab="Tab 2"
                  className="tab-panel w-tab-pane w--tab-active"
                >
                  <div className="w-layout-grid grid-pricing">
                    <div className="price-card-large">
                      <div className="price-full-wrapper">
                        <div className="price-header-wrapper">
                          <div className="price-icon-block">
                            <img
                              src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62e81d6bb455f36a521d50a7_All%20Icons-20.svg"
                              loading="lazy"
                              alt=""
                              className="price-icon"
                            />
                          </div>
                          <div>
                            <div className="pricing-heading-large">Manual Buy</div>
                            <p className="price-details">
                              Choose each lead based on your exact needs and
                              preferences
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="line-break-price"></div>
                      <div className="w-layout-grid feature-grid-large">
                        {/* Features for Manual Buy */}
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            Dynamic Pricing (₹49 to ₹399)
                          </div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">Leads from all over the world</div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            OTP &amp; Phone Verified leads
                          </div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            Chat support
                          </div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            Choose &amp; Buy
                          </div>
                        </div>
                      </div>
                      <a href="/register" className="pricing-button-large holidifybutton button w-button">
                        Get Started
                      </a>
                    </div>

                    <div className="price-card-large">
                      <div className="price-full-wrapper">
                        <div className="price-header-wrapper">
                          <div className="price-icon-block">
                            <img
                              src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62e81d6bb455f36a521d50a7_All%20Icons-20.svg"
                              loading="lazy"
                              alt=""
                              className="price-icon"
                            />
                          </div>
                          <div>
                            <div className="pricing-heading-large">Manual Buy</div>
                            <p className="price-details">
                              Choose each lead based on your exact needs and
                              preferences
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="line-break-price"></div>
                      <div className="w-layout-grid feature-grid-large">
                        {/* Features for Manual Buy */}
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            Dynamic Pricing (₹49 to ₹399)
                          </div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">Leads from all over the world</div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            OTP &amp; Phone Verified leads
                          </div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            Chat support
                          </div>
                        </div>
                        <div className="feature-wrap">
                          <img
                            src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22034fde2c2504fa2642f_tick.svg"
                            alt=""
                            className="check"
                          />
                          <div className="feature-text">
                            Choose &amp; Buy
                          </div>
                        </div>

                      </div>
                      <a href="/register" className="pricing-button-large holidifybutton button w-button">
                        Get Started
                      </a>
                    </div>

                    {/* Add more price cards as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="price-header-bar"></div>
        </div>
      </div>

      <h3 className="heading-2 mt-5">Join India’s Largest Travel Marketplace</h3>
      <div id="howItWorks" className="container">
        <div className="w-layout-grid grid-content">


        </div>
        <div className="w-layout-grid grid-content">
          <div className="image-content">
            <img
              src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/64ca0bb74aaca95fa3372722_Pink%20Brown%20Support%20Contact%20Illustration%20Instagram%20Post.png"
              loading="lazy"
              sizes="(max-width: 767px) 90vw, 440px"
              srcSet="
          https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/64ca0bb74aaca95fa3372722_Pink%20Brown%20Support%20Contact%20Illustration%20Instagram%20Post-p-500.png 500w,
          https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/64ca0bb74aaca95fa3372722_Pink%20Brown%20Support%20Contact%20Illustration%20Instagram%20Post-p-800.png 800w,
          https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/64ca0bb74aaca95fa3372722_Pink%20Brown%20Support%20Contact%20Illustration%20Instagram%20Post.png 1080w"
              alt=""
              className="image-cover"
            />
            <img
              src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f2275f9576fdb42733cdaf_Card%2011.svg"
              loading="lazy"
              width="299"
              alt=""
              className="image"
            />
          </div>
          <div id="w-node-_8913eb43-e266-19cd-e10e-71db0263c4fa-3101559d" className="content-wrapper">
            <h3 className="heading-3">We are here to help you</h3>
            <div className="body-normal">Dedicated Account Manager to help you grow your business</div>
            <div className="step-wrapper">
              <div className="step-item">
                <img
                  src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22d7fdf04380a75ea074a_dialogue.svg"
                  loading="lazy"
                  alt=""
                  className="image-2"
                />
                <div>
                  <div className="step-detail">STEP 01</div>
                  <p className="body-normal bold">Sign Up</p>
                  <div className="text-block-8">Create your free profile</div>
                </div>
              </div>
              <div className="step-line"></div>
              <div className="step-item">
                <img
                  src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22d7fdf04380a75ea074a_dialogue.svg"
                  loading="lazy"
                  alt=""
                  className="image-2"
                />
                <div>
                  <div className="step-detail">STEP 02</div>
                  <p className="body-normal bold">Verify Your Profile</p>
                  <div className="text-block-8">by submitting documents</div>
                </div>
              </div>
              <div className="step-line"></div>
              <div className="step-item">
                <img
                  src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22d7fdf04380a75ea074a_dialogue.svg"
                  loading="lazy"
                  alt=""
                  className="image-2"
                />
                <div>
                  <div className="step-detail">STEP 03</div>
                  <p className="body-normal bold">Buy Credits</p>
                  <div className="text-block-8">with UPI, Cards, NEFT or cash deposit</div>
                </div>
              </div>
              <div className="step-line"></div>
              <div className="step-item">
                <img
                  src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f22d7fdf04380a75ea074a_dialogue.svg"
                  loading="lazy"
                  alt=""
                  className="image-2"
                />
                <div>
                  <div className="step-detail">STEP 04</div>
                  <p className="body-normal bold">Get Leads</p>
                  <div className="text-block-8">Choose manually or auto delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <section id="features" className="features-area item-full text-center cell-items default-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h2>Popular  <span>Destination</span></h2>
                  <h4>these travellers from States or all over the India?</h4>
                </div>
              </div>
            </div>
            <div className="row features-items">
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="icon">

                    <img src="https://img.freepik.com/premium-vector/3d-uttar-pradesh-map-is-state-india_667085-144.jpg?w=2000" loading="lazy" alt="" className="feature-icon" />
                  </div>
                  <div className="info">
                    <h4>Uttar Pradesh</h4>
                    <p>Uttar Pradesh is a state in northern India.it is the most populated state in India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="icon mb-1">
                    <img src="https://www.indiastatelections.com/images/maps/NagaLand/nagaland.jpg" loading="lazy" alt="" className="feature-icon" />
                  </div>
                  <div className="info">
                    <h4>Nagaland</h4>
                    <p>Check the tourist map of Nagaland as a destination guide to travel in various parts of the state.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="icon mb-1">
                    <img src="https://img.freepik.com/premium-vector/3d-map-uttarakhand-state-india_667085-182.jpg?w=2000" loading="lazy" alt="" className="feature-icon" />
                  </div>
                  <div className="info">
                    <h4>UttaraKhand</h4>
                    <p>Uttarakhand showing major hill stations like Nainital, Mussoorie, Ranikhet, Rishikesh, Kausani and more...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="icon mb-4">
                    <img src="https://www.careerindia.com/img/2014/09/09-tripurastate.jpg" loading="lazy" alt="" className="feature-icon" />
                  </div>
                  <div className="info">
                    <h4>Tripura</h4>
                    <p>  It is bordered to the north, west, and south by Bangladesh, to the east by the state ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="icon mb-1">
                    <img src="https://t3.ftcdn.net/jpg/02/64/58/16/360_F_264581619_bdszNRdtleyQMg3z3QClJSS3zHesnoIE.jpg" loading="lazy" alt="" className="feature-icon" />
                  </div>
                  <div className="info">
                    <h4>Sikkim</h4>
                    <p>Sikkim is bordered by the Tibet Autonomous Region of China to the north and northeast, by Bhutan to ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <div className="icon mb-1">
                    <img src="https://t3.ftcdn.net/jpg/02/64/58/16/360_F_264581622_vCF6OG5YnboOqFocFS0DNn2tD450gDnR.jpg" loading="lazy" alt="" className="feature-icon" />
                  </div>
                  <div className="info">
                    <h4>Tamil Nadu</h4>
                    <p>Tamil Nadu, a major state in southern India, is bordered with Puducherry, Kerala, Karnataka and Andhra Pradesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <div className="section-features-c">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-heading text-center">
                <h2>Frequently Asked Questions</h2>
                <h4>Here are some of the questions that travel agents ask us very frequently.</h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="feature-line-break"></div>
          <div className="w-layout-grid grid-feature-small">
            <div className="card-feature-small">
              <div className="feature-heading heading-3">What is a verified travel inquiry or a verified travel lead?</div>
              <p className="body-normal">A verified travel lead contains the following information:<br /><br />Destination name, origin city, number of travelers, departure date, Hotel category, services required (flights, cabs, hotels, visa, etc.), Booking status for flights or trains, Trip type (casual, honeymoon, group, etc.) and additional requests, Verification method (phone, OTP, Whatsapp).<br /><br />You can see the specific details of a lead only after you purchase it. This includes the traveler's name, verified phone number, and verified email ID.</p>
            </div>
            <div className="card-feature-small">
              <div className="feature-heading heading-3">How does Tour&Guide get travel leads?</div>
              <p className="body-normal">Tour&Guide is one of the World’s largest travel platforms with a lot of high-quality travel content to help people research about their places. We have curated tours &amp; packages from 100s of agents, and they’re displayed on our package listing pages. Around <strong>10+ State Covered </strong>visit Tour&Guide website every month. &nbsp;<br /><br />Travelers interested in receiving customized quotes from travel agents are asked to fill up an inquiry form on the website. <br /><br />They provide their details like name, phone number, email address, destination, number of travelers, trip duration, where they're starting from, the type of hotel they want, and if they've booked flights.</p>
            </div>
            <div className="card-feature-small">
              <div className="feature-heading heading-3">How does Tour&Guide do quality check of travel leads?</div>
              <p className="body-normal">We employ a strict quality control process, which includes Email Verification, OTP Verification, and Phone Call Verification. <br />When a lead is created, we ensure the phone number is real by sending a verification code. We also verify the email address after the lead is submitted.<br /><br />Our team from Tripcrafters then talks to each traveler and checks their travel needs and intentions. We understand what they're looking for, and if they show genuine interest in talking to a travel agent, we verify the lead.<br />&zwj;<br />Our in-house verification team directly interacts with each traveler to understand their requirements and gauge their interest level. This comprehensive lead generation process ensures you receive high-quality and verified leads, increasing the likelihood of converting them into successful bookings.</p>
            </div>
            <div className="card-feature-small">
              <div className="feature-heading heading-3">Are these verified leads exclusive?</div>
              <p className="body-normal">Given that travel packages are costly purchases, travelers ask us to connect them to connect with multiple partners to compare and choose the best option for them.<br /><br /><strong>We connect each verified lead to a maximum of three travel agents.</strong><br /><br />This ensures that the competition for each verified lead remains reasonable, giving you a fair chance to convert potential travelers into customers. It helps strike a balance between giving travelers options and allowing each agent to customize their offerings based on the travelers' preferences.</p>
            </div>
          </div>
        </div>
      </div>


      <div id="whyHolidify">
        <div className="container">
          <h3 className="heading-2">What’s the advantage of working with Tour&Guide?<br /></h3>
          <div className="w-layout-grid-a grid-feature-three">
            <div className="section-features-a">
              <div className="card-feature-small">
                <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24c91e54e01f79f5445d5_cloud.svg" loading="lazy" alt="" className="image-3" />
                <div className="feature-heading">Real-Time Delivery</div>
                <p className="body-normal">Our leads are delivered to you in real-time as soon as they are verified, enabling you to reach out to potential customers when their interest is at its peak.<br /></p>
              </div>
            </div>
            <div className="section-features-a">
              <div className="card-feature-small">
                <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24d9bfde2c278cfa45864_grad-cap.svg" loading="lazy" alt="" className="image-4" />
                <div className="feature-heading">Dedicated account manager to assist you</div>
                <p className="body-normal">We assign an Account Manager specifically for your account. Your Account Manager will be your main contact person who can help you with everything related to your account. They will train you to use the dashboard, including selecting leads, setting up your dashboard, managing your preferences, handling your profile, getting reviews, and building your brand reputation.</p>
              </div>
            </div>

            <div className="section-features-a">
              <div className="card-feature-small">
                <img src="https://uploads-ssl.webflow.com/62e81d6ab455f31bb81d502d/62f24d9bfde2c278cfa45864_grad-cap.svg" loading="lazy" alt="" className="image-4" />
                <div className="feature-heading">Free Profile &amp; Reviews</div>
                <p className="body-normal">We offer a profile and review manager tool that you can use for free. It helps you manage your profile and reviews; you can learn more about it on our platform. Your profile stays on the platform even if you’re not buying travel leads from us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-features-b p-5">
        <div id="howItWorks" className="container-extra-small">
          <h3 className="heading-2">What type of agents work with Tour&Guide?</h3>
          <div id="w-node-_44884a84-85d9-36a0-5d37-7673015b6022-3101559d" className="content-wrapper">
            <div className="body-normal">
              Tour&Guide and Tripcrafters have a vast network of partners comprising over 3000 travel companies from various regions. These travel companies range from small, specialized agencies to large and well-established firms. Our platform connects these partners with travelers seeking holiday packages and travel options. Being part of our extensive network gives you access to a diverse audience, providing ample opportunities to grow your business and reach out to potential customers across different demographics.<br />
            </div>
          </div>
        </div>
      </div>


    </div>



  );
}

export default TravelAgent;