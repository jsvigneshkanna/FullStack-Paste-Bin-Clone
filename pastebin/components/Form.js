import React, { useState } from "react";

const Form = () => {
  const [snippets, setsnippets] = useState("");
  const [response, setresponse] = useState("");
  const saveSnippet = () => {
    const { error } = fetch("/api/snippet", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ content: snippets }),
    });
    if (error) {
      setresponse(response);
    }
  };
  if (response != "") {
    return (
      <div className="error-page">
        <div className="error-msg">
          <h3>There is error while saving previous snippet đĸ</h3>
          <p>Please click below</p>
          <p>
            <a href="/">
              <p>Reload đ</p>
            </a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <div className="input-group form-floating">
          <textarea
            className="form-control"
            aria-label="With textarea"
            id="snippetInput"
            style={{ height: "300px" }}
            onChange={(e) => {
              setsnippets(e.target.value);
            }}
          ></textarea>
          <label htmlFor="snippetInput">Enter your Snippets</label>
        </div>
        <button onClick={saveSnippet} type="button" className="btn btn-outline-success" style={{ marginTop: 20 }}>
          Create thought đŠī¸
        </button>
      </div>
    );
  }
};

export default Form;
