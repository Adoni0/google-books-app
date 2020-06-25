import React, { Component } from 'react'

export default class Form extends Component {

    formStyle = {
        marginRight: 50,
        marginLeft: 50
    }

    render() {
        return (
            <div>
                <form style={this.formStyle}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Book Search</label>
                        <input type="text" className="form-control" />
                        <small id="emailHelp" className="form-text text-muted">
                            Search any book in the Google Book database.
            </small>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Search
          </button>
                </form>
            </div>
        )
    }
}
