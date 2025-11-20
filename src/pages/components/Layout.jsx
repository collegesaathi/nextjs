import Footer from "./Footer";
import Navbar from "./Navbar";

export const metadata = {
  title: "College Sathi",
  description: "Explore top colleges and programs.",
};

export default function Layout({ children }) {
  return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>

  );
}
