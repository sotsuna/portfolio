"use client";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">

      <div className="px-5 py-5 w-screen h-auto grid justify-center justify-items-center">
        <Hero
          title={{ 1: "Marco", 2: "Kist" }}
          subtitle="Frontend Developer"
          spanStyle="bg-clip-text text-clip text-transparent bg-gradient-to-r from-purple-800 to-purple-500"
        />
      </div>

      <div className="w-screen h-auto px-5 py-5 grid justify-center justify-items-center">
        <div className="py-2">
          <Button text="About" route="/about" />
        </div>
        <div className="py-2">
          <Button text="Projects" route="/projects" />
        </div>
        <div className="py-2">
          <Button text="Contact" route="/contact" />
        </div>
      </div>
    </div>
  );
}
