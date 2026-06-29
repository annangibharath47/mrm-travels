import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "./Fleet";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Map from "../components/Map";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Fleet />
      <Services />
      <Testimonials/>
      <Map/>
      <Footer />
    </>
  );
}