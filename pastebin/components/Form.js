import React from "react";

const Form = () => {
  const saveSnippet = () => {
    console.log("fs");
  };
  return (
    <div class="text-center">
      <div class="input-group form-floating">
        <textarea
          class="form-control"
          aria-label="With textarea"
          id="snippetInput"
          style={{ height: "340px" }}
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
