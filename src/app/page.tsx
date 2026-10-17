
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02152B] text-white">
      <Navbar />

      <Hero />

      <Footer />
    </div>
  );
}
