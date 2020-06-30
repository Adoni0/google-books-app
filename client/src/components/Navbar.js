import React, { Component } from 'react'

export class Navbar extends Component {

  navStyle = {
    background: '#fbb034',
    background: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%'
  }

    render() {
        return (
            <div>
                <nav style={this.navStyle} className="navbar navbar-expand-lg navbar-light bg-light">
  <a style={{color: 'green'}} className="navbar-brand" href="#">Google Books</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a style={{color: 'red'}} className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a style={{color: 'red'}} className="nav-link" href="#">Saved</a>
      </li>
      
    </ul>
  </div>
</nav>
                
            </div>
        )
    }
}


export default Navbar
