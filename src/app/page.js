import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#131022] to-[#282148]  min-h-screen scroll-smooth transition-all duration-1000 relative box-border outline-none">
    {/* <main className="bg-gradient-to-r from-[#131022] to-[#282148]  min-h-screen scroll-smooth transition-all duration-1000 relative box-border outline-none"> */}
      <NavBar/>
      <HeroSection/>
      <WorkSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}
