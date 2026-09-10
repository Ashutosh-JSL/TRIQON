import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Difference from "@/components/Difference";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import Trending from "@/components/Trending";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Difference />
        <ProjectsPortfolio />
        <Trending />
        <SuccessStories />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
