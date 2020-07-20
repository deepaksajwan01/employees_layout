import React, { Component } from 'react'
import '../../static/styles/header.css'
import logo from '../../static/images/czlogo.png'

export default class Header extends Component {
  render() {
    return (
      <div className="main-nav-wrapper">
        <div className="logo-wrap">
          <img src={logo} alt="logo"/>
        </div>
       <div className="title-wrap">
         <h4>Employee Database</h4>
       </div>
       <div className="user-profile-wrap">
         
         <h5><i class="fa fa-user-circle" aria-hidden="true"></i>
         DS</h5>
       </div>
      </div>
    )
  }
}
