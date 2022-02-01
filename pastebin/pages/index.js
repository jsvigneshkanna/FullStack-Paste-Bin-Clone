import Head from "next/head";
import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paste Bin</title>
        <meta name="description" content="Paste Bin for sharing your own thoughts" />
        <link rel="icon" href="icon.png" />
      </Head>
      <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
        <h1>Welcome to Paste Bin 📑</h1>
        <h5 style={{ color: "red" }}>
          Here you can share some of your thoughts with your closed ones with slugified url{" "}
        </h5>
      </div>
      {typeof window !== "undefined" ? <Form /> : null}
    </div>
  );
}
