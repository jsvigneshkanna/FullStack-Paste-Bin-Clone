import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
