import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularExams from "./components/PopularExams";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4">
        <Header />
        <HeroSection />
        <PopularExams/>
      </div>
    </main>
  );
}
