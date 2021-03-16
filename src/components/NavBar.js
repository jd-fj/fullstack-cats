import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link to="/catstone" className="navbar-brand" >Full Stack Cats</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/breeds">Breeds</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/fact">Fact</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/catpics">Cat Pics</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/kittycube">Kitty Cube</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)}

export default NavBar;
