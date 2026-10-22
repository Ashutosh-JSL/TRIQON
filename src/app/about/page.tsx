
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | TRIQOLO",
  description:
    "Learn about TRIQOLO, our mission, vision, founder, learning approach, and core values.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A1B37] px-5 py-12 text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-3xl font-bold sm:text-4xl">About Us</h1>
            <p className="mt-4 text-lg leading-8 text-[#00BEE6]">
              Turning Knowledge into Practical Skills and Potential into
              Progress.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">About TRIQOLO</h2>
            <p className="leading-8 text-slate-300">
              TRIQOLO bridges the gap between education and industry through
              practical, project-based learning experiences that help students
              gain real-world exposure, industry-relevant skills, and
              professional confidence.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
            <p className="mb-4 leading-8 text-slate-300">
              At TRIQOLO, we believe practical experience plays a crucial role
              in professional development. Academic learning builds knowledge,
              but applying that knowledge through real-world projects
              strengthens understanding, confidence, and career readiness.
            </p>
            <p className="leading-8 text-slate-300">
              Our platform creates structured opportunities for students and
              aspiring professionals to gain practical exposure, work on
              meaningful projects, receive mentorship, and continuously improve
              their skills.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Our Founder</h2>
            <h3 className="mb-2 text-lg font-medium text-[#00BEE6]">
              Ganesh Dahiphale
            </h3>
            <p className="mb-4 text-slate-400">Founder, TRIQOLO</p>
            <p className="leading-8 text-slate-300">
              The vision behind TRIQOLO is to bridge the gap between academic
              learning and practical industry experience. The goal is to create
              an environment where students can move beyond theory and build
              professional skills through meaningful practical work.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="leading-8 text-slate-300">
              To empower students and aspiring professionals through
              structured, project-based learning opportunities that encourage
              practical application, skill development, and professional
              growth.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
            <p className="leading-8 text-slate-300">
              To build a trusted platform that connects learning with practical
              experience and helps prepare the next generation of professionals
              for evolving industry expectations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>

            <h3 className="mb-2 text-lg font-medium text-[#00BEE6]">Learn</h3>
            <p className="mb-5 leading-8 text-slate-300">
              Develop foundational knowledge through structured learning
              resources and expert guidance.
            </p>

            <h3 className="mb-2 text-lg font-medium text-[#00BEE6]">Build</h3>
            <p className="mb-5 leading-8 text-slate-300">
              Apply concepts through practical assignments, projects, and real
              deliverables.
            </p>

            <h3 className="mb-2 text-lg font-medium text-[#00BEE6]">Grow</h3>
            <p className="leading-8 text-slate-300">
              Strengthen skills through feedback, confidence building, and
              continuous improvement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Our Core Values</h2>

            <h3 className="mb-1 font-medium text-[#00BEE6]">Practicality</h3>
            <p className="mb-4 leading-7 text-slate-300">
              Emphasizing application and hands-on learning.
            </p>

            <h3 className="mb-1 font-medium text-[#00BEE6]">
              Continuous Improvement
            </h3>
            <p className="mb-4 leading-7 text-slate-300">
              Encouraging growth through practice and feedback.
            </p>

            <h3 className="mb-1 font-medium text-[#00BEE6]">Transparency</h3>
            <p className="mb-4 leading-7 text-slate-300">
              Communicating expectations and outcomes clearly.
            </p>

            <h3 className="mb-1 font-medium text-[#00BEE6]">Accessibility</h3>
            <p className="mb-4 leading-7 text-slate-300">
              Creating meaningful opportunities for aspiring professionals.
            </p>

            <h3 className="mb-1 font-medium text-[#00BEE6]">
              Professional Development
            </h3>
            <p className="leading-7 text-slate-300">
              Building career-relevant skills and capabilities.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Commitment</h2>
            <p className="leading-8 text-slate-300">
              We are committed to creating structured and purposeful learning
              experiences that help students understand how knowledge
              translates into practical work. Every learner’s journey is unique,
              and our role is to provide guidance, opportunities, and
              project-based exposure that supports their growth.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
