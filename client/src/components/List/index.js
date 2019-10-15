import React from "react";

export function List(props) {
  return <ul className="list-group">{props.children}</ul>;
}

export function ListItem({ children }) {
  return (
    <li
      className="list-group-item"
      style={{
        padding: "0px 0px 0px 10px",
        margin: "0px",
        fontFamily: "PT Serif"
      }}
    >
      {children}
    </li>
  );
}
