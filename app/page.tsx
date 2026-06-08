import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider" role="separator"></div>
      <About />
      <div className="divider" role="separator"></div>
      <Services />
      <div className="divider" role="separator"></div>
      <BlogPreview />
      <Contact />
    </>
  );
}
