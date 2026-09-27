import React, { useState } from 'react';

export default function Header({ onOpenSearch }) {
  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="logo">
          <a href="#"><img src="https://via.placeholder.com/150x60?text=AIC+Kibera" alt="AIC Kibera Logo" /></a>
        </div>
        <ul className="nav-links">
          <li className="nav-item"><a href="#">About Us</a></li>
          <li className="nav-item dropdown-parent">
            <a href="#">Services ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">First Time Here?</a></li>
              <li><a href="#">Welcome Message</a></li>
              <li><a href="#">Sunday Programme</a></li>
              <li><a href="#">Weekly & Annual Calendar</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown-parent">
            <a href="#">Ministries ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Worship/Pulpit Ministry</a></li>
              <li><a href="#">Fellowship Ministry</a></li>
              <li><a href="#">Outreach Ministry</a></li>
              <li><a href="#">Christian Education Department</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown-parent">
            <a href="#">Media ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Blogs, News and Events</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="#">Golden Jubilee</a></li>
          <li className="nav-item dropdown-parent">
            <a href="#">Resources ▾</a>
            <ul className="dropdown-menu">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="#">Contact Us</a></li>
          <li className="nav-item"><a href="#" className="btn-give">Give</a></li>
          <li className="nav-item"><span className="search-icon" onClick={onOpenSearch}>🔍</span></li>
        </ul>
      </div>
    </header>
  );
}