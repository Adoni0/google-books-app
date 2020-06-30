import React, { Component } from "react";
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import { List, ListItem } from '../components/List';
import { Link } from "react-router-dom";
import Form from '../components/Form';
import SaveBtn from '../components/SaveBtn';
import ViewBtn from '../components/ViewBtn';
import Save from './Save';
// import { response } from "express";

class Search extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    link: "",
    image: ""
  };


  handleInputChange = event => {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    this.setState({ title: event.target.value });
  }

  handleSave = event => { //click handler on the savebtn component
    event.preventDefault();

    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      link: this.state.link,
      image: this.state.image
    }).then(res => console.log(res));

  }

  searchBooks = (event) => {
    
    API.getGoogle()
      .then(data => this.setState({ books: data }))
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Form
          onChange={this.handleInputChange}
          value={this.state.value}
          submit={this.searchBooks}
        />

        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}
                id={book._id}>
                <strong>
                  {book.title} by {book.author}
                </strong>
                {book.description}
                <ViewBtn />
                <SaveBtn />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}

      </>
    )
  }
}

export default Search;
