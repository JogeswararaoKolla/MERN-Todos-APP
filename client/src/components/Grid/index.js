import React from "react";

export function Container(props) {
  return (
    <div className={props.fluid ? "container-fluid" : "container"}>
      {props.children}
    </div>
  );
}

export function Row({ children }) {
  return <div className="row">{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
// Here we are using the object desstructing syntax
export function Col({ size, children }) {
  const cols = size
    .split(" ")
    .map(element => "col-" + element)
    .join(" ");
  return <div className={cols}>{children}</div>;
}
