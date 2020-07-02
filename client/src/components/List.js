import React from "react";

const listStyle = {
  background: "lightgrey"
}

export function List(props) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{props.children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return <li style={listStyle} className="list-group-item">{props.children}</li>;
}
