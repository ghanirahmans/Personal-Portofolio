import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
        <About />
      </div>
      <Footer />
    </main>
  );
}
