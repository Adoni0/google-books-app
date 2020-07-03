import React from "react";

function DeleteButton(props) {
  return (
    <button style={{float: 'right'}} id="delete-btn" className="butn" onClick={() => props.deleteBook(props.id)} tabIndex="0">
      Delete
    </button>
  );
}

export default DeleteButton;
