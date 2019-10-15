import React, { useState } from "react";

// This file exports the Input, TextArea, and FormBtn components
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="4" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return <button {...props}>{props.children}</button>;
}

export function useFormInput(initialState) {
  const [value, setValue] = useState(initialState);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue(initialState);
  };

  return [
    value,
    {
      value,
      onChange: handleChange
    },
    reset
  ];
}
