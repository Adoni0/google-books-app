import React from "react";


function ViewBtn(props) {
  return (
    // <button style={{float: 'right'}} onClick={() => (window.location = props.redirect)} className="butn" tabIndex="0">
    //   View
    // </button>

    <a style={{ float: 'right' }} href={props.redirect} id="view-btn" className="butn" target="_blank" tabIndex="0">
      View
    </a>
  );
}

export default ViewBtn;
