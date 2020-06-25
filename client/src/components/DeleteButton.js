import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <span style={{float: 'right'}} className="delete-btn" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteButton;
