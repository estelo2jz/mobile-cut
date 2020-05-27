import React, { Component } from 'react';
import { FaQuestionCircle, FaCheckCircle, FaFacebookSquare, FaSnapchat, FaTwitter, FaUsersCog } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { TiSocialAtCircular } from 'react-icons/ti';

class Boxes extends Component {
  render() {
    return (
      <div>
        <section className="boxes">
          <div className="box">
            <i className="box-icon"><FaCheckCircle /></i>
            <h3>Our Main Goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum. 
            </p>
          </div>
          <div className="box">
            <i className="box-icon"><FaQuestionCircle /></i>
            <h3>How We Do It?</h3>
            <p>              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum.</p>
          </div>
          <div className="box">
            <i className="box-icon"><TiSocialAtCircular /></i>
            <h3>Social's</h3>
            <div className="box-links">
              <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
              <a href="https://twitter.com/explore"><FaTwitter /></a>
              <a href="https://www.instagram.com/"><AiFillInstagram /></a>
              <a href="https://www.snapchat.com/"><FaSnapchat /></a>
            </div>
          </div>
          <div className="box">
            <i className="box-icon"><FaUsersCog /></i>
            <h3>Support</h3>
            <p>              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum. </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Boxes;