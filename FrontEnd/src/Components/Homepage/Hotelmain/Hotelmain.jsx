import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function HotelPage() {
  return (
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

      <div>


<h2 className="text-center">Hotels & places to stay</h2>
<br/>

      
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                   {/* <svg className="bd-placeholder-img" width="100%" height="200%" xmlns="https://www.holidify.com/images/cmsuploads/compressed/Palolem_sunset_20191227103634.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>*/}
                   <img src="https://www.holidify.com/images/bgImages/INDIA.jpg" alt="" className="bd-placeholder-img"   />
                </div>
                <div className="carousel-item">
                <img src="https://www.holidify.com/images/bgImages/UDAIPUR.jpg" alt="" className="bd-placeholder-img"  />
                </div>
                <div className="carousel-item">
                <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1349545253_20190715095335.jpg" alt="" className="bd-placeholder-img" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
<br/>
        <div>
          <h2 className='text-center'>Stay Collections Near You</h2>
          </div>
        <div className="container marketing">
          
         
            <div className="row">
                <div className="col-lg-4">
                   
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/68350205.jpg?k=2dc76622104d661a32d99e07f7edefd63ac7706fe079070585257209e89c9ec6&o=&hp=1"  alt="" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2>Goa</h2>
                    <p>Top stay options curated by Tour&Guide for your travel needs.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4">
                   
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=700&h=500&s=1"  alt="" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2>Maharastra</h2>
                    <p>Top stay options curated by Tour&Guide for your travel needs.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4">
                <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2022/08/Best-Places-to-Visit-in-Rishikesh-Uttarakhand.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2>UttaraKhand</h2>
                    <p>Top stay options curated by Tour&Guide for your travel needs.</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
            </div>
            </div>

{/*
       <div>
          <h2>Best Places To Stay In India</h2>
        </div>
               
        <div className="container marketing">
            <div className="row">
                <div className="col-lg-3">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/139528109.jpg?k=f28daddd35d132898ff46b627e1aa3fa115ed318d09fc3557166f40e0defbde7&o=&hp=1" alt="" className="bd-placeholder-img rounded-circle" width="600" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2> 5 Star </h2>
                </div>
                <div className="col-lg-3">
                <img src="https://cf.bstatic.com/images/hotel/max1024x768/424/42417525.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2>Heritage</h2>
                </div>
                <div className="col-lg-3">
                <img src="https://www.holidify.com/images/cmsuploads/compressed/64188526_20210122151626.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2>Tree Houses</h2>
                </div>
                <div className="col-lg-3">
                <img src="https://www.holidify.com/images/cmsuploads/compressed/17175629_20210122160345.jpg" alt="" className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" />
                    <h2>Pool Villas</h2>
                </div>
            </div>
            
        </div>
*/}
       

       </div>
  
      <div>
        <div>
          <h2>Top Beach Destinations</h2>
        </div>
        <section className="articles">
          <article>
            <div className="article-wrapper">
              <figure>
              <img src="https://www.tripsavvy.com/thmb/vLEE2GuEfSVAMZIEYdMLYnMjoNU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-458071515-5c61149f46e0fb000127c9c4.jpg" alt="" />
                </figure>
              <div className="article-body">
                <h2>Varkala Beach</h2>
                <p>
                Varkala beach lies about an hour north of the capital Trivandrum in Kerala and provides a relatively peaceful alternative to the now commercialized Kovalam.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.tripsavvy.com/thmb/RZ-HpnJlh56c99TVWmV0f9gb68s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-903398436-5c612e4a46e0fb00017dd31f.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Baga Beach</h2>
                <p>
                You'll find them all there: water sports, parasailing, beach shacks, bars, clubs, and fine dining restaurants!
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>

            <div className="article-wrapper">
              <figure>
                <img src="https://www.tripsavvy.com/thmb/sgZrj96nCLl5Qep78HVWCeia17E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-554670455-5c6146c2c9e77c0001d31e40.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Radhanagar Beach</h2>
                <p>
                Radhanagar Beach is situated on Havelock Island in the Andaman and Nicobar Islands, which are sprinkled across the Bay of Bengal.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>

      <div>
        <div>
          <h2>Top Hill Stations</h2>
        </div>
        <section className="articles">
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.thomascook.in/blog/wp-content/uploads/2017/08/Untitled-design-20.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Manali</h2>
                <p>
                Regarded to be one of the best hill stations in India, Manali is a heaven for all the snow lovers.There are many things to do in Manali, which is fondly known as the Valley of the Gods.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>

            <div className="article-wrapper">
              <figure>
                <img src="https://www.thomascook.in/blog/wp-content/uploads/2017/08/Untitled-design-5-1.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Gulmarg</h2>
                <p>
                Boasting the scenic beauty of the ever-wonderful Jammu and Kashmir, Gulmarg stands on a different level among all the hill stations in North India.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>

            <div className="article-wrapper">
              <figure>
                <img src="https://www.thomascook.in/blog/wp-content/uploads/2017/08/Untitled-design-8-1.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2> Nainital</h2>
                <p>
                Nainital is a heaven on earth. Well recognised as the Lake District of India, it is one of the best places to beat the heat in the scorching summer. 
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>

      <div>
        <div>
          <h2>Stay Collections in top states</h2>
        </div>
        <section className="articles">
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.tourmyindia.com/weekend-tours/images/weekend-getaways-delhi-banner.webp" alt="" />
              </figure>
              <div className="article-body">
                <h2>Delhi</h2>
                <p>
                  The Red Fort, the largest monument in Delhi, is one of its most popular tourist destinations and attracts thousands of visitors every year. India, built by Shah Jahan in the mid-17th century.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.tourmyindia.com/weekend-tours/images/ooty-weekend-tour1.webp" alt="" />
              </figure>
              <div className="article-body">
                <h2>Bangalore</h2>
                <p>
                  Ooty – well famous as the "Queen of hill stations" is the capital of Nilgiris district. Ooty is one of the most popular tourist resorts and picturesque picnic spots in India and situated at an altitude of 2240 mt.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>

            <div className="article-wrapper">
              <figure>
                <img src="https://www.tourmyindia.com/weekend-tours/images/nasik-weekend-tour2.webp" alt="" />
              </figure>
              <div className="article-body">
                <h2>Pune</h2>
                <p>
                  Lord Ram and Goddess Sita used to bath in this holy tank during their exile as per the legend. According to Hindu believe, a dip in tank water will give liberation or Moksha to the departed souls.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>

      <div>
        <div>
          <h2>Stay Collections in top Temple</h2>
        </div>

        <section className="articles">
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Badrinath-Temple-1.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Badrinath Temple</h2>
                <p>
                Situated close to the Alaknanda River, the abode of Lord Badrinath is located in the Chamoli district of Uttarakhand. This holy shrine of Lord Vishnu is one of the Char Dhams of Hindu religion.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/01/Sun-Temple-Konark-Odisha.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Sun Temple</h2>
                <p>
                The Sun temple is situated in the small town of Konark situated in the Puri district of Odisha. This marvel of architecture is dedicated to Indian God of Sun, Surya.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Kedarnath-Uttarakhand.jpg" alt="" />
              </figure>
              <div className="article-body">
                <h2>Kedarnath Temple</h2>
                <p>
                The temple was restored by Adi Sankaracharya in the 8th century. It is one of the Chota Char Dhams of Uttarakhand and requires the pilgrims to trek a distance of 14 kms on the hilly terrain.
                </p>
                <a href="#" className="read-more">
                  Read more <span className="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>

    </div>
  );
}

export default HotelPage;