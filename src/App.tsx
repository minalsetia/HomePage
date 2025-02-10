import './index.css';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Whychoose from "./components/Whychoose";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FutureEnhancements from "./components/FutureEnhancements";
import FAQSection from "./components/FAQSection";
import ComprehensiveModules from "./components/ComprehensiveModules";



const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Whychoose />
      <VideoSection />
      <BenefitsSection />
      <ComprehensiveModules />
      <TestimonialsSection />
      <FutureEnhancements />
      <FAQSection />
      <Footer />
      
      
    </div>
  );
};

export default App;