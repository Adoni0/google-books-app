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
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    link: "",
    image: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
    // googleController.findAll()
    // .then(res => this.setState({ books: res.data }))
    // .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      link: this.state.link,
      image: this.state.image
    }).then(res => this.loadBooks());

  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Form>
          <SaveBtn />
          <ViewBtn />
        </Form>
        <List>
           {/* {this.state.books.map(book => {
            <ListItem>

            </ListItem>
          })}  */}
        </List>
      </>
    )
  }
}

export default Search;
