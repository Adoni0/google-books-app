import React from "react";

function DeleteButton(props) {
  return (
    <button style={{float: 'right'}} className="delete-btn" onClick={() => props.deleteBook(props.id)} tabIndex="0">
      Delete
    </button>
  );
}

export default DeleteButton;
