"use client";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import { defaultStyles } from "@/types/defaultStyles";

export default function Home() {
  return (
    <div className={`${defaultStyles.pageStyle}`}>
      <div className={`${defaultStyles.heroSectionStyle}`}>
        <div className="self-end">
          <Hero
            title={{ 1: "Marco", 2: "Kist" }}
            subtitle="Frontend Developer"
            spanStyle={defaultStyles.spanStyle}
          />
        </div>
      </div>

      <div className={`${defaultStyles.buttonSectionStyle}`}>
        <div className={`${defaultStyles.bcStyle}`}>
          <Button text="About" route="/about" />
        </div>
        <div className={`${defaultStyles.bcStyle}`}>
          <Button text="Projects" route="/projects" />
        </div>
        <div className={`${defaultStyles.bcStyle}`}>
          <Button text="Contact" route="/contact" />
        </div>
      </div>
    </div>
  );
}