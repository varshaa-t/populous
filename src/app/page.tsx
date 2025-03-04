import DisciplinesSection from "@/components/DisciplinesSection";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SustainabilityAndCareersSection from "@/components/SustainabilityAndCareersSection";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen">
        <video autoPlay loop muted className="fixed brightness-50 inset-0 w-screen h-screen object-cover -z-10">
            <source src="/videos/video-1.mp4" />
        </video>
        <Navbar/>
        <HeroSection/>
      </div>
      <div className="bg-white h-full pt-6 xs:pb-14 xs:pt-8 xl:pb-20">
        <NewsSection/>
      </div>
      <div className="relative h-screen">
        <video autoPlay loop muted className="w-screen brightness-50">
          <source src="/videos/video-2.mp4"/>
        </video>
        <div className="absolute top-20 px-20 w-full">
          <ExploreSection/>
        </div>
      </div>
      <div className="bg-white h-full pt-[10%] xs:pt-[10%] sm:pt-[20%] md:pt-[40%] lg:pt-[50%] xl:pt-[60%]">
        <ProjectsSection/>
      </div>
      <div className="bg-white h-full py-[12vw]">
        <DisciplinesSection/>
      </div>
      <div className="bg-white h-full pt-10 pb-20 xs:pb-36">
        <SustainabilityAndCareersSection/>
      </div>
    </div>
  );
}
