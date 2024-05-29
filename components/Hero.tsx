'use client';
import { HeroProps } from "@/types/HeroProps";

const Hero = ({title, subtitle, spanStyle}:HeroProps) => {
    return( 
    <div>
        <section className="font-JetBrains_Mono">
            <h1 className="text-4xl font-extrabold leading-none tracking-tight">
                {title[1]} <span className={spanStyle}>{title[2]}</span>{title[3]}</h1>
            <p>{subtitle}</p>
        </section>
    </div>

    );
}

export default Hero;