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

  handleSave = id => { //click handler on the savebtn component

    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      link: this.state.link,
      image: this.state.image
    }).then(res => console.log(res));

  }

  searchBooks = () => {
    
    API.getGoogle(this.state.title)
      .then(data => this.setState({ books: data.data }))
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Form
          handleInputChange={this.handleInputChange}
          title={this.state.title}
          handleFormSubmit={this.searchBooks}
        />

        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book.id}
                id={book.id}>
                <strong>
                  {book.volumeInfo.title} by {book.volumeInfo.authors}
                </strong>
                {book.volumeInfo.description}
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
