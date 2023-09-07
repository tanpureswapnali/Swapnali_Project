
import React,{useState} from 'react';
import '../Login/login.css';
import '../ForgotPassword/Forgot'
import ReCAPTCHA from "react-google-recaptcha";
import { Link, NavLink } from 'react-router-dom';
const Login = () => {

  const[verfied, setVerifed] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div class="container-fluid">
      <h1 className="text">Login</h1>
            <div class="row justify-content-center align-items-center"  >
                <div class="col-5 bg-white p-5 shadow-lg" >
                    <input type="text" class="form-control bg-body-secondary border-0 py-2" placeholder="Username"/>
                    <br/>
                    <input type="password" class=" form-control  bg-body-secondary border-0 " placeholder="Password"/>
                    <br/>
                    <div>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={onChange}
                    />
                    </div>
                    <br/>
                    <button class="btn bg-primary w-100 rounder-0 w-75 py-2" disabled={!verfied}>Login</button>
                    <div class="text-center" >
                        <br/>
                        <span class="text-body-secondary">Not Registered?</span>
                        <span class="text-body-secondary"><a href="Register"> Create an account</a></span>
                        <br/>
                        <span class="text-body-secondary">Forgot Password?</span>
                        <span class="text-body-secondary"><a href="Forgot"> Forgot Password</a></span>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </div>

  );
}

export default Login;