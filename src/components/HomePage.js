import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to use React Router for navigation
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="banner">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/media" className="nav-link">Media</Link>
          <Link to="/games" className="nav-link">Games</Link>
          <Link to="/web-design" className="nav-link">Web Design</Link>
        </nav>
        <div className="logo-container">
          <Link to="/">
            <img src="/PlaceHolderLogo.png" alt="Novaeh Studios Logo" className="logo" />
          </Link>
        </div>
      </header>
      <section className="homepage-content">
        <div className="homepage-intro">
          <h2>Novaeh Studios</h2>
          <p>From concept to creation, giving visions life.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
