import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Form from "../components/Form";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Paste Bin</title>
        <meta name="description" content="Paste Bin for sharing your own thoughts" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className="text-center" style={{ marginTop: 20 }}>
        <h1>Welcome to Paste Bin 📑</h1>
        <p>Here you can share some of your thoughts with your closed ones with slugified url </p>
      </div>
      <Form />
    </div>
  );
}
