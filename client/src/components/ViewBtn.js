import React from "react";
// import { Link } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function ViewBtn(props) {
  return (
    <button style={{float: 'right'}} onClick={() => (window.location = props.redirect)} className="butn" tabIndex="0">
      View
    </button>
  );
}

export default ViewBtn;
