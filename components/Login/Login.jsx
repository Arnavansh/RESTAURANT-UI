import React from "react";

import './Login.css';

const Login = () => {
    return (
        <>
        <h1>LOGIN</h1>
        <p className="p2">If you're 
        already a My Chili's Rewards® member, 
        log in now! Or, if you are new to My 
        Chili's Rewards®,join now below!
        </p>
        <div class="form mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" />
</div>
<div class=" form mb-3">
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"></input>
</div>
<div class="form form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Stay Logged In 
  </label>
</div>
<button type="button" class="btn btn-outline-light">LOG IN</button><br /><br/>
<a className="link" href="./Login.jsx">FORGOT OR CREATE A PAASWORD</a>
        </>
    )
}

export default Login;