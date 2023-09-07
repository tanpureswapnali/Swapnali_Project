import React, { useState } from 'react';
import './Review.css';
import 'font-awesome/css/font-awesome.min.css';

const Review = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = `Name: ${name}\nComment: ${comment}`;
    setComments([...comments, newComment]);
    setName('');
    setComment('');
    
  };
return (
  
    <div>
      <form>
        <section className="faq_dynamic-main">
          <div className="container">
            <div className="listing__faq py-4">
              <div className="faq_inner-listing">
                <h2 className="secondary-color py-2 f-24">Add Your Review</h2>
                <div className="faq_box-wrapper">
                  <div className="faq_form-box-inner border border-1 border-secondary rounded p-3">
                    <input
                      type="text"
                      name="listing_faq-question"
                      id="review-username"
                      placeholder="Name"
                      autoComplete="off"
                      className="w-100 py-2 form-control rounded-0"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div className="input-group">
                      <textarea
                        aria-label="With textarea"
                        rows="4"
                        cols="50"
                        id="rewiew_message"
                        placeholder="Message"
                        className="form-control mt-3 w-100 rounded-0"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                      />
                      
                      <div className="form-btn">
                        <br></br>
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>

      <div>
        <h2>Submitted Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
<div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="well well-sm">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star"></span>6
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '19%' }}
                      >
                        <span className="sr-only">19%</span>
                      </div>
                    </div>
                  </div>
                  <div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star"></span>5
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '80%' }}
                      >
                        <span className="sr-only">80%</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star"></span>4
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '60%' }}
                      >
                        <span className="sr-only">60%</span>
                      </div>
                    </div>
                  </div>
                  </div><div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star"></span>3
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '40%' }}
                      >
                        <span className="sr-only">40%</span>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star"></span>2
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '20%' }}
                      >
                        <span className="sr-only">20%</span>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="row rating-desc">
                  <div className="col-xs-3 col-md-3 text-right">
                    <span className="fa fa-star"></span>1
                  </div>
                  <div className="col-xs-8 col-md-9">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '15%' }}
                      >
                        <span className="sr-only">15%</span>
                      </div>
                    </div>
                  </div>
                  </div>
                {/* End row */}
              </div>
              <div className="col-xs-12 col-md-6 text-center">
                <h1 className="rating-num">5.1</h1>
                <div className="rating">
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star"></span>
  <span className="fa fa-star-half-empty"></span>
</div>
                <div>
                  <span className="fa fa-user"></span>1000total votes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
</div>
 );
};

export default Review;

