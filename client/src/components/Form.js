import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Book Search</label>
                        <input type="text" class="form-control" />
                        <small id="emailHelp" class="form-text text-muted">
                            Search any book in the Google Book database.
            </small>
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Search
          </button>
                </form>
            </div>
        )
    }
}
