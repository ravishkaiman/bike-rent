import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Fleet />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
