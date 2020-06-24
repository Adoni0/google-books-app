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
