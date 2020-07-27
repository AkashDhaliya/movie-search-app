import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="Container">
          <div className="app-header">
            <h1>Movies</h1>
          </div>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + "/favourite">
                Favourites
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="active" to={process.env.PUBLIC_URL + "/"}>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
