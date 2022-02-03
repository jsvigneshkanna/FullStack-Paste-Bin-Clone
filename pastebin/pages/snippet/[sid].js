// Snippet Slug file
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";

const Snippet = ({ stringSnippet }) => {
  return (
    <div className="snippet_container">
      <h1 className="slug_header">This is my Snippet 📝</h1>
      <p className="">{stringSnippet}</p>
    </div>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const dbKey = process.env.SUPABASE_KEY;
  const dbURL = process.env.SUPABASE_URL;
  const supabase = createClient(dbURL, dbKey);
  const { data: slugId } = await supabase.from("snippets").select("slug");
  const paths = slugId.map((slug) => ({
    params: { sid: slug.slug.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("@@@@@@@@@@@@@@  ", params);
  const dbKey = process.env.SUPABASE_KEY;
  const dbURL = process.env.SUPABASE_URL;
  const supabase = createClient(dbURL, dbKey);
  const { data } = await supabase.from("snippets").select("snippet").eq("slug", params.sid);
  let snippet = "";
  if (data) {
    snippet = data[0].snippet;
  }
  let stringSnippet = JSON.stringify(snippet);
  // Pass post data to the page via props
  return { props: { stringSnippet } };
}
export default Snippet;
