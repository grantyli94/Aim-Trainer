import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact to="/">Aim.ly</NavLink>
          {/* <ul className="navbar-nav me-auto">
            <li className="navbar-brand"><NavLink exact to="/">Home</NavLink></li>
          </ul> */}
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto" >
              <li className="nav-item">
                <NavLink className="nav-link active" exact to="/classic">Classic</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" exact to="/tracking">Tracking</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" exact to="/leaderboards">Leaderboards</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;