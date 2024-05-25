'use client';
import { HeroProps } from "@/types/HeroProps";

const Hero = ({title, subtitle, spanStyle}:HeroProps) => {
    return( 
    <div>
        <section>
            <h1 className="text-4xl font-extrabold leading-none tracking-tight">
                {title[1]} <span className={spanStyle}>{title[2]}</span></h1>
            <p>{subtitle}</p>
        </section>
    </div>

    );
}

export default Hero;