import Hero from "@/components/Hero";
import Paragraph from "@/components/Paragraph";
import Card from "@/components/Card";

const Projects = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">

            <section className="p-4">

                <Hero
                    title={{ 1: "My", 2: "Contacts" }}
                    spanStyle="bg-clip-text text-clip text-transparent bg-gradient-to-r from-purple-800 to-purple-500"
                />

            </section>

            <section className="ml-4 mr-5">

                <Paragraph
                    text="Here are some of my contacts. Feel free to reach out to me if you have any questions or want to work with me."
                />

            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                <Card
                    title="Email"
                    description="This is my email address: mkist202@gmail.com"
                />
            </section>

            
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                <Card
                    title="Instagram"
                    description="This is my Instagram: @marco.kistt"
                />
                
            </section>
        </div>
    );
}

export default Projects;