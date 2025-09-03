import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection =() => {
    return (
        <section className="w-full pt-36 md:pt-48 pb-10">
            <div className="space-y-6 text-center">
                <div className="space-y-6 mx-auto">
                    <h1>Yor AI Career Coach for
                        <br/>
                        Professional Success
                    </h1>
                    <p>
                        Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
                    </p>
                </div>
                <div>
                    <Link href='/dashboard'>
                      <Button size="lg" className="px-8">Get Started</Button>
                    </Link>
                    <Link href='https://www.linkedin.com/in/aman-singh-471a38242/'>
                      <Button size="lg" className="px-8" varient="outline">Get Started</Button>
                    </Link>
                </div>

                <div>
                    <div>
                        <Image 
                        src={"/banner.jpeg"}
                        width={12800}
                        height={720}
                        alt="Banner Professor"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;