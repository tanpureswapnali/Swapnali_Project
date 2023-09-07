import React,{useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../Register/regstyle.css'
const Register =() =>
{
    const[verfied, setVerifed] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
    return(
        <div class="container-fluid">
            <h1 className="text">Register</h1>
            <div class="row justify-content-center align-items-center p-5">
                <div className='col-3 '>
                </div>
                <div className='col bg-white p-5 shadow-lg'>
                    <div class="row">
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder='First Name'/>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder='Last Name'/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-6">
                            <input type="number" class="form-control" placeholder='Phone no'/>
                        </div>
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder='Email'/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-6">
                            <input type="password" class="form-control" placeholder='Password' />
                        </div>
                        <div class="col-6">
                            <input type="password" class="form-control" placeholder='Confirm Password'/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-6">
                            <input type="number" class="form-control" placeholder='Aadhar Card No'/>
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder='Nationality'/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-6">
                           
                            <select class="form-control" placeholder='Country'>
                                <option disabled>-- Country --</option>
                                <option>India</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <select class="form-control" placeholder='State'>
                                <option disabled>-- State --</option>
                                <option>Maharashtra</option>
                                <option>Delhi</option>
                                <option>Bihar</option>
                                <option>Banglore</option>
                                <option>Tamilnadu</option>
                                <option>Goa</option>
                                <option>Himachal Pradesh</option>
                                <option>Tamilnadu</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-6">
                            <input type="number" class="form-control" placeholder='Pin code'/>
                        </div>
                        <div class="col-6">
                            <select class="form-control" placeholder='State'>
                                <option >-- Gender --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                    </div>
                    </div>
                    <br/>
                    <div class="col-12">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Address" rows="3" col="3"></textarea>
                        </div>
                    <br/>
                    <div className='col-12'>
                        <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        />
                    </div>
                    <br/>
                    
                    <div className='col-12'>
                        <button class="btn bg-primary w-100 rounder-0 w-75 py-2" disabled={!verfied} >Register</button>
                    </div>
                    <div class="text-center col-12" >
                        <span class="text-body-secondary">Already have an account?</span>
                        
                        <span class="text-body-secondary"><a href="Login"> Login</a></span>
                        <br/>
                        <span class="text-body-secondary">Forgot Password?</span>
                        <span class="text-body-secondary"><a href="Forgot"> Forgot Password</a></span>
                    </div>
                    
                    <br/>
                    <br/>
                </div>
                <div className='col-3'>

                </div>
            </div>
            </div>
    );
}

export default Register;