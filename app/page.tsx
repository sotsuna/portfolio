"use client";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">

      <div className="p-4">

        <Hero 
        title={{ 1: "Marco", 2: "Kist" }} 
        subtitle="Frontend Developer" 
        spanStyle="bg-clip-text text-clip text-transparent bg-gradient-to-r from-purple-800 to-purple-500"
        />

      </div>

      <div className="flex flex-row items-center gap-4 p-4 justify-center">

        <Button
          text="About"
          customClass="bg-gradient-to-b from-purple-500 to-purple-800 p-3 rounded-[20px] text-sm"
          route="/about" 
        />

        <Button
          text="Projects"
          customClass="bg-gradient-to-b from-purple-500 to-purple-800 p-3 rounded-[20px] text-sm"
          route="/projects" 
        />

        <Button text="Contact"
          customClass="bg-gradient-to-b from-purple-500 to-purple-800 p-3 rounded-[20px] text-sm"
          route="/contact" 
        />

      </div>

    </div>
  );
}
