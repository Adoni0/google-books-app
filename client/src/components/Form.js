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
                    <label for="exampleInputEmail1">Book Search</label>
                    <input placeholder="Search by book title" type="text" className="form-control" {...props.value} />
                    <small id="emailHelp" className="form-text text-muted">
                        Search any book in the Google Book database.
            </small>
                </div>

                <button onSubmit={props.submit} type="submit" className="btn btn-primary">
                    Search
          </button>
            </form>
        </div>

    );
}



