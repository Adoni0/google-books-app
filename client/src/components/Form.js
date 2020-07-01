import React from 'react';

const formStyle = {
    marginRight: 50,
    marginLeft: 50
}

export default function Form(props) {
    return (
        <div>
            <form style={formStyle}>
                <div className="form-group">
                    <label>Book Search</label>
                    <input value={props.title} onChange={props.handleInputChange} placeholder="Search by book title" type="text" className="form-control" />
                    <small id="emailHelp" className="form-text text-muted">
                        Search any book in the Google Book database.
            </small>
                </div>

                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">
                    Search
          </button>
            </form>
        </div>

    );
}



