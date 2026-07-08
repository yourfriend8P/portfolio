import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
export default function App() {
  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0B0F0E] font-sans transition-all duration-300 ease-in-out">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
