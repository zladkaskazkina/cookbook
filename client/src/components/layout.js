import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main container mb-5">{children}</div>
      <Footer />
    </>
  );
}
