import Navbar from "@/components/navbar";
import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import SectionLayanan from "@/components/sections/section-layanan";
import SectionHarga from "@/components/sections/section-harga";
import SectionArea from "@/components/sections/section-area";
import SectionKontak from "@/components/sections/section-kontak";
import Footer from "@/components/footer";
import FloatingWA from "@/components/floating-wa";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <SectionLayanan />
      <SectionHarga />
      <SectionArea />
      <SectionKontak />
      <Footer />
      <FloatingWA />
    </>
  );
}
