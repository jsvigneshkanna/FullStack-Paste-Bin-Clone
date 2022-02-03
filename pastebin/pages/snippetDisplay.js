import React from "react";
import { createClient } from "@supabase/supabase-js";

const snippetDisplay = ({ snippets }) => {
  if (snippets) {
    return (
      <div className="table-responsive">
        <table className="table table-info table-striped table-bordered border-success">
          <thead>
            <tr>
              <th scope="col">Snippet</th>
              <th scope="col" className="slug-head">
                Slugs Url
              </th>
            </tr>
          </thead>
          <tbody>
            {snippets.map((snippet) => {
              return (
                <tr className="snippet">
                  <td className="content">{snippet.snippet}</td>
                  <td className="slug">
                    <a href={`/snippet/${snippet.slug}`}>click 🚀</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>Please reload this page 😢</p>
      </div>
    );
  }
};

// Getting all the snippets using api
export async function getStaticProps() {
  const dbKey = process.env.SUPABASE_KEY;
  const dbURL = process.env.SUPABASE_URL;
  const supabase = createClient(dbURL, dbKey);
  const { data, error } = await supabase.from("snippets").select("snippet,slug");
  return {
    props: {
      snippets: data,
    },
  };
}

export default snippetDisplay;
