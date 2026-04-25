import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/Herosection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/ui/Footer";


const Page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Page;