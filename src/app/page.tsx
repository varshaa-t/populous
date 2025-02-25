import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <div className="relative h-screen">
        <video autoPlay loop muted className="fixed inset-0 w-screen h-screen object-cover -z-10">
            <source src="https://player.vimeo.com/progressive_redirect/playback/941421753/rendition/720p/file.mp4?loc=external&log_user=0&signature=7dca6abedc07dfd32b500e14d5de330de89d8019fdb2c3562cbee3146eace18f" />
        </video>
        <div className="fixed inset-0 bg-black/50 -z-10"></div>
        <Navbar/>
        <HeroSection/>
    </div>
  );
}
