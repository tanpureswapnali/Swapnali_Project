import React, { useState } from 'react';
import './Ticket.css';

const TicketBooking = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [numAdults, setNumAdults] = useState('');
  const [numChildren, setNumChildren] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform further actions with the form data, e.g., sending to server
  };

  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 booking-form">
              <div className="form-header">
                <h1>Booking</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    autoComplete="off"
                    placeholder="city"
                    // value={destination}
                    value="Goa" disabled
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <label className="form-label"  >Destination</label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="date" required />
                      <label className="form-label">Check In</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="date" required />
                      <label className="form-label">Check out</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <select className="form-control" required>
                        <option value="" disabled selected>no of rooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label className="form-label">Rooms</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <select className="form-control" required>
                        <option value="" disabled selected>no of adults</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <label className="form-label">Adults</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <select className="form-control" required>
                        <option value="" disabled selected>no of children</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                      <label className="form-label">Children</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="Enter your Email" />
                      <label className="form-label">Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="tel" placeholder="Enter you Phone" />
                      <label className="form-label">Phone</label>
                    </div>
                  </div>
                </div>
                <div className="form-btn">
                  <button type="submit" className="submit-btn">Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
