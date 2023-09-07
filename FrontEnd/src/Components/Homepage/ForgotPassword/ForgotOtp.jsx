import React,{useState} from 'react';

import ReCAPTCHA from "react-google-recaptcha";
import '../ForgotPassword/Forgot'

const ForgotOtp =() =>
{
    const[verfied, setVerifed] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return(
    <div class="container-fluid">
    <h1 className="text">Fogot Password</h1>
          <div class="row justify-content-center align-items-center"  >
              <div class="col-5 bg-white p-5 shadow-lg" >
                  <input type="text" class="form-control bg-body-secondary border-0 py-2" placeholder="Username/Email"/>
                  <br/>
                  <div className="">
                        <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        />
                    </div>
                    <br/>
                    <a href="Forgot" class="btn btn-primary text-center" disabled={!verfied}>Send Otp</a>
                  <div class="text-center" >
                      <br/>
                      <span class="text-body-secondary">Not Registered?</span>
                      <span class="text-body-secondary"><a href="Register"> Create an account</a></span>
                      <br/>
                      <span class="text-body-secondary">Alread have an account?</span>
                      <span class="text-body-secondary"><a href="Login"> Login</a></span>
                  </div>
              </div>
          </div>
          <br/>
          <br/>
          <br/>
      </div>
  );
}


export default ForgotOtp;