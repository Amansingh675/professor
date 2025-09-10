import HeroSection from "@/components/hero";

export default function Home() {
  return( 
    <div>
    <div className="grid-background">
  <video autoPlay muted loop playsInline>
    <source src="/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<HeroSection/>
</div>
);
}