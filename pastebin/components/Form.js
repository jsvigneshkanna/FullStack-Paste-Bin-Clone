import React, { useState } from "react";

const Form = () => {
  const [snippets, setsnippets] = useState("");
  const saveSnippet = () => {
    fetch("/api/snippet", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ snippets }),
    });
  };
  return (
    <div class="text-center">
      <div class="input-group form-floating">
        <textarea
          class="form-control"
          aria-label="With textarea"
          id="snippetInput"
          style={{ height: "340px" }}
          onChange={(e) => {
            setsnippets(e.target.value);
          }}
        ></textarea>
        <label for="snippetInput">Enter your Snippets</label>
      </div>
      <button onClick={saveSnippet} type="button" class=" btn btn-outline-success" style={{ marginTop: 20 }}>
        Success
      </button>
    </div>
  );
};

export default Form;
