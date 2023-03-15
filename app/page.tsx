import { Cards } from "@/components/Cards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <div className="w-screen h-fit overflow-hidden flex items-center flex-col px-2 mx-auto">
      <div className="max-w-5xl flex items-center flex-col">
        <Navbar />
        <Header />
      </div>
      <Slider />
      <div className="max-w-5xl flex items-center flex-col">
        <Cards />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
