import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {

  navStyle = {
    background: '#fbb034',
    background: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%'
  }

  render() {
    return (
      <div>
        <nav style={this.navStyle} className="navbar navbar-expand-lg navbar-light bg-light">
          <a style={{ color: 'green' }} className="navbar-brand" href="#">Google Books</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li style={{ color: 'red' }} className="nav-item active">               
              <Link to="/">Search</Link>
              </li>
              <li style={{ color: 'red', marginLeft: 10 }} className="nav-item">
                
                  <Link to="/books">Save</Link>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    )
  }
}


export default Navbar
