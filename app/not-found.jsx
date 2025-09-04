import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-black text-white">
      <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 pb-2 pr-2">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/" passHref>
        <Button variant="secondary">Return Home</Button>
      </Link>
    </div>
  );
}
