import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import SaveLayout from '../components/SaveLayout';
import ViewBtn from '../components/ViewBtn';
import DeleteButton from '../components/DeleteButton';
import API from '../utils/API';

export default class Save extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        API.getBooks()
    }

    deleteBook = id => { //move to save page
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }

      loadBooks = () => { //move to save page
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      }


    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <SaveLayout>
                <DeleteButton />
                <ViewBtn />
                </SaveLayout>
                
            </div>
        )
    }
}
