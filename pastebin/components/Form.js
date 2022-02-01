import React, { useState } from "react";

const Form = () => {
  const [snippets, setsnippets] = useState("");
  const saveSnippet = () => {
    fetch("/api/snippets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ content: snippets }),
    });
  };
  return (
    <div className="text-center">
      <div className="input-group form-floating">
        <textarea
          className="form-control"
          aria-label="With textarea"
          id="snippetInput"
          style={{ height: "340px" }}
          onChange={(e) => {
            setsnippets(e.target.value);
          }}
        ></textarea>
        <label htmlFor="snippetInput">Enter your Snippets</label>
      </div>
      <button onClick={saveSnippet} type="button" className=" btn btn-outline-success" style={{ marginTop: 20 }}>
        Success
      </button>
    </div>
  );
};

export default Form;
