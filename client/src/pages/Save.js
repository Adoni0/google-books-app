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


    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem
                                key={book._id}
                                id={book._id}
                            >
                                <DeleteButton
                                    deleteBook={this.deleteBook}
                                    id={book._id}
                                />
                                <ViewBtn
                                    redirect={book.link}
                                />
                                <strong>
                                    {book.title} by {book.author.join(', ')}
                                </strong>
                                <img className="book-image" src={book.image}></img>
                                <br />
                                {book.description}



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
