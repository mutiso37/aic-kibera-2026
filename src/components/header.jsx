import { Link } from 'react-router-dom';
import logo from '../assets/aic-kibera-logo.png';

export default function Header({ onOpenSearch }) {
  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="AIC Kibera Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About Us</Link></li>
          
          <li className="nav-item dropdown-parent">
            <Link to="/services">Services ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="/services">First Time Here?</Link></li>
              <li><Link to="/services">Welcome Message</Link></li>
              <li><Link to="/services">Sunday Programme</Link></li>
              <li><Link to="/services">Weekly & Annual Calendar</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown-parent">
            <Link to="/ministries">Ministries ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="/ministries">Worship/Pulpit Ministry</Link></li>
              <li><Link to="/ministries">Fellowship Ministry</Link></li>
              <li><Link to="/ministries">Outreach Ministry</Link></li>
              <li><Link to="/ministries">Christian Education Department</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown-parent">
            <Link to="/media">Media ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="/media">Sermons</Link></li>
              <li><Link to="/media">Blogs, News and Events</Link></li>
              <li><Link to="/media">Gallery</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown-parent">
            <Link to="/resources">Resources ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="/resources">FAQs</Link></li>
              <li><Link to="/resources">Downloads</Link></li>
              <li><Link to="/resources">Testimonials</Link></li>
            </ul>
          </li>

          <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
          <li className="nav-item"><Link to="/contact" className="btn-give">Give</Link></li>
          <li className="nav-item">
            <span className="search-trigger" onClick={onOpenSearch} style={{ cursor: 'pointer', fontWeight: 500 }}>
              Searching for... 🔍
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}