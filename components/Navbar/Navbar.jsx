import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from '../About/About.jsx';

import Chilli from '../Chilli/Chilli.jsx';

import Login from '../Login/Login.jsx';

import Rewards from '../Rewards/Rewards.jsx';

const NavBar = () => {
    return(
        <>
        <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/restaurant/src/components/Chilli/Chilli.jsx">Chili's</Link>
  </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/restaurant/src/components/About/About.jsx">About</Link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/restaurant/src/components/Rewards/Rewards.jsx">Rewards</Link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/restaurant/src/components/Login/Login.jsx">LogIn</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route exact path="/restaurant/src/components/Chilli/Chilli.jsx" element={<Chilli/>}>
          </Route>
          <Route exact path="/restaurant/src/components/About/About.jsx" element={<About/>}>
          </Route>
          <Route exact path="/restaurant/src/components/Rewards/Rewards.jsx" element={<Rewards/>}>
          </Route>
          <Route exact path="/restaurant/src/components/Login/Login.jsx" element={<Login/>}>
          </Route>
        </Routes>
</Router>
</>
    )
}

export default NavBar;