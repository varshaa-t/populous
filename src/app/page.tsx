import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";

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
      <div className="bg-white h-full pt-8 pb-14 xl:pb-20">
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
    </div>
  );
}
