import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Marketing from "./components/Marketing";
import Team from "./components/Team";
import News from "./components/News";
import Footer from "./components/Footer";
import WatercolorBackground from "./components/WatercolorBackground";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <News />
      <About />
      <Service />
      <Marketing />
      <Team />
      <Footer />
      <WatercolorBackground />
    </main>
  );
}
