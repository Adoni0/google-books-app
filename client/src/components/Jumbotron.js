import React, { Component } from "react";

export class Jumbotron extends Component {

  divStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ')",
    color: 'white',
    opacity: .8,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 20,
    borderRadius: 20
  };

  render() {
    return (
      
        <div style={this.divStyle} className="jumbotron">
          <h1 style={{fontWeight: 'bold'}} className="display-4">React Google Books Search</h1>
          <p style={{fontWeight: 'bold'}} className="lead">
            Search for and Save Books of Interests. 
          </p>
        </div>
      
    );
  }
}

export default Jumbotron;
