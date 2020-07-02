import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import ViewBtn from '../components/ViewBtn';
import DeleteButton from '../components/DeleteButton';
import { List, ListItem } from '../components/List';
import API from '../utils/API';

export default class Save extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    // viewBook = (id) => {
    //     API.viewGoogle(this.state.books.id)
    //     .then(data => console.log(data))

    // }


    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem key={book._id}
                                id={book._id}>
                                <strong>
                                    {book.title} by {book.author}
                                </strong>
                                <br />
                                {book.description}
                                <br />
                                {book.image}
                                <br />
                                {book.link}

                                {/* <ViewBtn viewBook={this.viewBook}/> */}
                                <DeleteButton deleteBook={this.deleteBook} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Books Saved</h3>
                    )}


            </div>
        )
    }
}
