import BannerCarousel from "../components/BannerCarousel";
import StatsSection from "../components/home/StatsSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import CourseProgramsSection from "../components/home/CourseProgramsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LearningMethodologySection from "../components/home/LearningMethodologySection";
import FacultySection from "../components/home/FacultySection";
import SuccessRateSection from "../components/home/SuccessRateSection";
import StudyResourcesSection from "../components/home/StudyResourcesSection";
import InfrastructureSection from "../components/home/InfrastructureSection";
import AlumniNetworkSection from "../components/home/AlumniNetworkSection";
import AchievementsSection from "../components/home/AchievementsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <BannerCarousel />
      <StatsSection />
      <WhyChooseSection />
      <CourseProgramsSection />

      {/* <LearningMethodologySection />
      <FacultySection />
      <SuccessRateSection />
      <StudyResourcesSection />
      <InfrastructureSection />
      <AlumniNetworkSection />
      <AchievementsSection /> */}

      <TestimonialsSection />

      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
