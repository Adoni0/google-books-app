import React, { Component } from "react";
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import { List, ListItem } from '../components/List';
// import { Link } from "react-router-dom";
import Form from '../components/Form';
import SaveBtn from '../components/SaveBtn';
import ViewBtn from '../components/ViewBtn';
// import Save from './Save';
// import { response } from "express";

class Search extends Component {

  state = {
    books: [],
    title: ""
    // author: "",
    // description: "",
    // link: "",
    // image: ""
  };


  handleInputChange = event => {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    this.setState({ title: event.target.value });
  }

  // handleSave = event => {
  //   event.preventDefault();
  //   this.saveToDatabase();
  // }

  handleSave = (id) => { //click handler on the savebtn component

    this.state.books.forEach(book => {
      if(id === book.id){
        API.saveBook({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks.smallThumbnail,
          googleId: book.id
        }).then(res => console.log(res));
      }
    })
    
    

  }

  handleFormSubmit = (event) => {
    // console.log('This function ran.');
    event.preventDefault();
    this.searchBooks();
  }

  searchBooks = () => {
    console.log('test');
    API.getGoogle(this.state.title)
      .then(data => 
        this.setState({ books: data.data })
        // console.log(data)
        )
        .catch(err => console.log(err))

  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Form
          handleInputChange={this.handleInputChange}
          title={this.state.title}
          handleFormSubmit={this.handleFormSubmit}
        />

        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book.id}
                id={book.id}>
                <strong>
                  {book.volumeInfo.title} by {book.volumeInfo.authors}
                </strong>
                <img src={book.volumeInfo.imageLinks.smallThumbnail}></img>
                {book.volumeInfo.description}
                <ViewBtn />
                <SaveBtn
                 key={book.id}
                 id={book.id}
                handleSave={this.handleSave}
                />
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
