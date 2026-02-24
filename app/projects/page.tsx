import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "120px", minHeight: "80vh", maxWidth: "1200px", margin: "0 auto", paddingLeft: "20px", paddingRight: "20px" }}>
        <Link href="/#project" className="btn btn-outline" style={{ display: "inline-flex", marginBottom: "20px" }}>
          <i className="ri-arrow-left-line"></i> Back to Home
        </Link>
        <Projects hideViewAll={true} />
      </div>
      <Footer />
    </main>
  );
}
