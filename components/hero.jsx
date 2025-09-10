"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {

    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;

       const handleScroll =()=> {

       const scrollPosition = window.scrollY;
       const scrollThreshold = 100;

       if (scrollPosition > scrollThreshold){
        imageElement.classList.add("scrolled");
       } else{
        imageElement.classList.remove("scrolled");
       }
       };

       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll",handleScroll);
    },[])

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 bg-gradient-to-l via-blue-950">
        <div  className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 tracking-tighter text-transparent bg-clip-text pb-2 pr-2">Your AI Career Coach for
                    <br/>
                    Professional Success
                </h1>
                <p className="mx-auto max-w-[600] text-muted-foreground md:text-xl">
                    Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
                </p>
            </div>

            <div className="flex justify-center space-x-4">
                <Link href="https://www.linkedin.com/in/aman-singh-471a38242/">
                 <Button size="lg" className="px-8" variant="outline">My-Linkedin😎</Button>
                </Link>
                <Link href="/dashboard">
                 <Button size="lg" className="px-8">Get Started</Button>
                </Link>
                <Link href="https://github.com/Amansingh675">
                 <Button size="lg" className="px-8" variant="outline">My-Github🚀</Button>
                </Link>
            </div>

            <div className="hero-image-wrapper mt-5 md:mt-0 px-4 md:px-8">
           <div
             ref={imageRef}
              className="hero-image relative w-full max-w-7xl aspect-video overflow-hidden rounded-lg shadow-2xl border mx-auto"
               >
                <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="absolute top-0 left-0 w-full h-full object-cover"
                  >
                 <source src="/Professor.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                 </video>
              </div>
            </div>
        </div>
    </section>
  
)};
export default HeroSection;