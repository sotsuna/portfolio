import Hero from "@/components/Hero";
import Paragraph from "@/components/Paragraph";

const Projects = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">

            <section className="p-4">

                <Hero
                    title={{ 1: "My", 2: "Projects" }}
                    spanStyle="bg-clip-text text-clip text-transparent bg-gradient-to-r from-purple-800 to-purple-500"
                />

            </section>

            <section className="ml-4 mr-5">

                <Paragraph
                    text="Here are some of the projects I've worked on. I'm always looking to improve my skills and learn new things. I'm currently working on personal projects and looking for new opportunities."
                    spanStyle="text-sm text-justify text-gray-500"
                />

            </section>
        </div>
    );
}

export default Projects;