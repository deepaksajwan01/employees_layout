import React, { Component } from 'react'
import '../../static/styles/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap shadow">
        <p>@ Copyright 2020-2021</p> 
        <ul>
          <li><a target="_blank" href="https://www.zeiss.co.in/corporate/home.html">Home</a></li>
          <li><a target="_blank" href="https://www.zeiss.co.in/corporate/contact-us.html">Contact</a></li>
        </ul>
      </div>
    )
  }
}
