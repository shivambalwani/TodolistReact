import React from "react";

function InputArea(prop) {
  return (
    <div className="form">
      <input onChange={prop.change} type="text" value={prop.text} />
      <button onClick={prop.additem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
