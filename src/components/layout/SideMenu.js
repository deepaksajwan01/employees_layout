import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../static/styles/sidemenu.css";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <ul className="side-menu-list">
          <Link to="/">
            <li className="side-menu-list-item">
              <i class="fa fa-home" aria-hidden="true"></i>Home
            </li>
          </Link>
          <Link to="/addEmployee">
            <li className="side-menu-list-item">
              <i class="fa fa-user-plus" aria-hidden="true"></i>Add New
            </li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="side-menu-list-item">
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
