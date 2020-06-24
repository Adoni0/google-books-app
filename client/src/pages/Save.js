import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
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
                <Jumbotron />
            </div>
        )
    }
}
