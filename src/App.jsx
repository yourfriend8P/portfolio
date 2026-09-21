import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { useTheme } from "./context/ThemeContext";
export default function App() {
  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0B0F0E] font-sans transition-all duration-300 ease-in-out">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}
