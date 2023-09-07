import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Homepage/Footer/Footer';
import Login from './Components/Homepage/Login/Login';
import Welcome from './Components/Homepage/Welcome/Welcome';
import Register from './Components/Homepage/Register/Register';
import  Navbar  from './Components/Homepage/Navbar/Navbar';
import Forgot from './Components/Homepage/ForgotPassword/Forgot';
import Result from './Components/WorkingHome/HomePagelogin/Searchbase/Result';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Mumbai from './Components/WorkingHome/HomePagelogin/Searchbase/Button/Mumbai/Mumbai';
import Shimla from './Components/WorkingHome/HomePagelogin/Searchbase/Button/Shimla/Shimla';
import AboutUs from './Components/Footer/Aboutus/Aboutus';
import Goa from './Components/WorkingHome/Exploer/Goa/Goa';
import Bihar from './Components/WorkingHome/Exploer/Bihar/Bihar';
import Gujarat from './Components/WorkingHome/Exploer/Gujarat/Gujarat';
import Himachal from './Components/WorkingHome/Exploer/Himachal/Himachal';
import Kerala from './Components/WorkingHome/Exploer/kerala/Kerala';
import Kashmir from './Components/WorkingHome/Exploer/Kashmir/Kashmir';
import Assam from './Components/WorkingHome/Exploer/Assam/Assam';
import Arunachal from './Components/WorkingHome/Exploer/Arunachal/Arunachal';
import Aruhotel from './Components/WorkingHome/Hotels/Arunachal/Aruhotel';
import Goahotel from './Components/WorkingHome/Hotels/Goa/Goahotel';
import ForgotOtp from './Components/Homepage/ForgotPassword/ForgotOtp';
import Assamhotel from './Components/WorkingHome/Hotels/Assam/Assamhotel';
import Biharhotel from './Components/WorkingHome/Hotels/Bihar/Biharhotel';
import Gujarathotel from './Components/WorkingHome/Hotels/Gujarat/Gujarathotel';
import Himachalpradesh from './Components/WorkingHome/Hotels/Himachal/Himachalpradesh';
import Jammu from './Components/WorkingHome/Hotels/Kashmir/Jammu';
import Keralahotel from './Components/WorkingHome/Hotels/Kerala/Kerala';
import Maharashtrahotel from './Components/WorkingHome/Hotels/Maharashtra/Maharashtra';
import Maharashtra from './Components/WorkingHome/Exploer/Maharashtra/Maharashtra';
import Meghalaya from './Components/WorkingHome/Exploer/Meghalaya/Meghalaya';
import Punjab from './Components/WorkingHome/Exploer/Punjab/Punjab';
import Rajasthan from './Components/WorkingHome/Exploer/Rajasthan/Rajasthan';
import Sikkim from './Components/WorkingHome/Exploer/Sikkim/Sikkim';
import TamilNadu from './Components/WorkingHome/Exploer/TamilNadu/TamilNadu';
import Tripura from './Components/WorkingHome/Exploer/Tripura/Tripura';
import Uttarakhand from './Components/WorkingHome/Exploer/Uttarakhand/Uttarakhand';
import Meghalayahotel from './Components/WorkingHome/Hotels/Meghalaya/Meghalayahotel';
import Punjabhotel from './Components/WorkingHome/Hotels/Punjab/Punjabhotel';
import Rajasthanhotel from './Components/WorkingHome/Hotels/Rajasthan/Rajasthanhotel';
import Sikkimhotelahotel from './Components/WorkingHome/Hotels/Sikkim/Sikkimhotel';
import TamilNaduhotel from './Components/WorkingHome/Hotels/TamilNadu/TamilNaduhotel';
import Tripurahotel from './Components/WorkingHome/Hotels/Tripura/Tripurahotel';
import Uttarakhandhotel from './Components/WorkingHome/Hotels/Uttarakhand/Uttarakhandhotel';
import TravelAgent from './Components/Homepage/TravelAgent/TravelAgent';
import HotelPage from './Components/Homepage/Hotelmain/Hotelmain';
import TicketBooking from './Components/WorkingHome/Booking/TicketBooking';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot" element={<ForgotOtp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/exploer/Goa" element={<Goa />} />
          <Route path="/exploer/Bihar" element={<Bihar />} />
          <Route path="/exploer/Gujarat" element={<Gujarat />} />
          <Route path="/exploer/Himachal" element={<Himachal />} />
          <Route path="/exploer/Kerala" element={<Kerala />} />
          <Route path="/exploer/Kashmir" element={<Kashmir />} />
          <Route path="/exploer/Assam" element={<Assam />} />
          <Route path="/exploer/Arunachal" element={<Arunachal />} />

          <Route path="/exploer/maharashtra" element={<Maharashtra />} />
          <Route path="/exploer/meghalaya" element={<Meghalaya />} />
          <Route path="/exploer/punjab" element={<Punjab/>} />
          <Route path="/exploer/rajasthan" element={<Rajasthan />} />
          <Route path="/exploer/tamilnadu" element={<TamilNadu />} />
          <Route path="/exploer/tripura" element={<Tripura />} />
          <Route path="/exploer/uttarakhand" element={<Uttarakhand />} />
          <Route path="/result" element={<Result />} />
          <Route path="/exploer/mumbai" element={<Mumbai />} />
          <Route path="/exploer/shimla" element={<Shimla />} />
          <Route path="/hotels/goahotel" element={<Goahotel />} />
          <Route path="/hotels/assamhotel" element={<Assamhotel />} />
          <Route path="/hotels/arunachalhotel" element={<Aruhotel />} />
          <Route path="/hotels/biharhotel" element={<Biharhotel />} />
          <Route path="/hotels/gujarathotel" element={<Gujarathotel />} />
          <Route path="/hotels/himachalhotel" element={<Himachalpradesh />} />
          <Route path="/hotels/kashmirhotel" element={<Jammu />} />
          <Route path="/hotels/keralahotel" element={<Keralahotel />} />
          <Route path="/hotels/maharashtrahotel" element={<Maharashtrahotel />} />

          <Route path="/hotels/meghalaya" element={<Meghalayahotel />} />
          <Route path="/hotels/punjabhotel" element={<Punjabhotel />} />
          <Route path="/hotels/rajasthanhotel" element={<Rajasthanhotel />} />
          <Route path="/hotels/sikkimhotel" element={<Sikkimhotelahotel />} />
          <Route path="/hotels/tamilnadu" element={<TamilNaduhotel />} />
          <Route path="/hotels/tripurahotel" element={<Tripurahotel />} />
          <Route path="/hotels/uttarakhandhotel" element={<Uttarakhandhotel />} />
          <Route path="/TravelAgent" element={<TravelAgent />} />
          <Route path="/hotelmain" element={<HotelPage />} />
          <Route path="/hotel/hotelbooking" element={<TicketBooking />} />
          <Route path="/reset" element={<Forgot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
