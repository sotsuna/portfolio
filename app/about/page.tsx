import Hero from "@/components/Hero";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

const About = () => {
    return (

        <div className="w-screen h-screen flex flex-col justify-center items-center">

            <section className="p-4">

                <Image src="/avatar.jpg" alt="my persona" width={200} height={200} className=" rounded-3xl"/>
            
            </section>

            <section className="p-4">

                <Hero
                    title={{ 1: "About", 2: "Me" }}
                    spanStyle="bg-clip-text text-clip text-transparent bg-gradient-to-r from-purple-800 to-purple-500"
                />

            </section>

            <section className="ml-4 mr-5">

                <Paragraph
                    text="I'm a Frontend Developer based in Brazil, specifically in Santa Cruz do Sul, Rio Grande do Sul. I have a passion for creating beautiful and functional websites."
                    spanStyle="text-sm text-justify text-gray-500"
                />

                <Paragraph
                    text="I have some experience with React, Next.js, Tailwind CSS, and other technologies. I'm always looking to learn new things and improve my skills. I'm currently studying TypeScript and Node.js."
                    spanStyle="text-sm text-justify text-gray-500"
                />

                <Paragraph
                    text="Currently, I'm working on personal projects and looking for new opportunities. I'm open to freelance work and job offers. Feel free to contact me if you have any questions or want to work with me."
                    spanStyle="text-sm text-justify text-gray-500"
                />

            </section>
        </div>
    );
}
export default About;