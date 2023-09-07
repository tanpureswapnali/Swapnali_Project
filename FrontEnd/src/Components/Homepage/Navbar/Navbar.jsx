import React from 'react';
import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Navbar/logo.jpeg';

function NavScrollExample() {
    return (
      <Navbar expand="lg" className=" me-auto" id='navbar'>
        <Container fluid>
          <Navbar.Brand href="/"><a href='/Welcome'><img src={logo} alt="Logo" style={{ height:"3rem",width:"100px" }}/><b> Let's Fly </b></a></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className=""
              style={{ Height: "15rem",}}
              navbarScroll
            >
              {/* Empty Nav elements */}
            </Nav>
            
            {/* Move the Nav elements to the right */}
            <Nav className="ml-auto text-white">
            <NavDropdown title=" Hotel " className="extitle" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" disabled >
                <i class="bi bi-geo-alt" ></i>Hotels</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/arunachalhotel">Arunachal Pradesh</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/assamhotel">Assam</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/biharhotel">Bihar</NavDropdown.Item>
                <NavDropdown.Item href="/Goa">Goa</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/gujarathotel">Gujarat</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/himachalhotel"> Himachal Pradesh</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/kashmirhotel">Jammu and Kashmir</NavDropdown.Item>
                <NavDropdown.Item href="/hotels/keralahotel">Kerala</NavDropdown.Item>
                <NavDropdown.Item href="/Maharashtra">Maharashtra</NavDropdown.Item>
                <NavDropdown.Item href="/Meghalayahotel">MeghalayaHotels</NavDropdown.Item>
                <NavDropdown.Item href="/Punjabhotel">PunjabHotels</NavDropdown.Item>
                <NavDropdown.Item href="/Rajasthanhotel">RajasthanHotels</NavDropdown.Item>
                <NavDropdown.Item href="/Sikkimhotel">SikkimHotels</NavDropdown.Item>
                <NavDropdown.Item href="/TamilNaduhotel">Tamil NaduHotels</NavDropdown.Item>
                
                <NavDropdown.Item href="/Tripurahotel">Tripurahotels</NavDropdown.Item>
                
                <NavDropdown.Item href="/Uttarakhandhotel">Uttarakhandhotels</NavDropdown.Item>
              </NavDropdown> 
              <Nav.Link href="Register" className=''><b>User</b> </Nav.Link>
              <Nav.Link href="/TravelAgent" className=''><b>TravelAgent </b></Nav.Link>
            <NavDropdown title=" Explore " className="extitle" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" disabled >
                <i class="bi bi-geo-alt" ></i>States</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Arunachal">Arunachal Pradesh</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Assam">Assam</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Bihar">Bihar</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Goa">Goa</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Gujarat">Gujarat</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Himachal"> Himachal Pradesh</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Kashmir">Jammu and Kashmir</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/kerala">Kerala</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Maharashtra">Maharashtra</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Meghalaya">Meghalaya</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Punjab">Punjab</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Rajasthan">Rajasthan</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Sikkim">Sikkim</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/TamilNadu">Tamil Nadu</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Tripura">Tripura</NavDropdown.Item>
                <NavDropdown.Item href="/exploer/Uttarakhand">Uttarakhand</NavDropdown.Item>
              </NavDropdown> 
              
              <Nav.Link href="Register" className=''><b>SignUp</b> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavScrollExample;