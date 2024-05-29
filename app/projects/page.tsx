import Hero from "@/components/Hero";
import Paragraph from "@/components/Paragraph";
import { defaultStyles } from "@/types/defaultStyles";

const Projects = () => {
  return (
    <div className={`${defaultStyles.pageStyle}`}>
      <section className="p-4">
        <Hero
          title={{
            1: "Not really convinced about my",
            2: "background",
            3: "?",
          }}
          spanStyle={defaultStyles.spanStyle}
        />
      </section>

      <section className={`${defaultStyles.defaultMargin}`}>
        <Paragraph text="Here are some of the projects I've worked on. I didn't actually worked on all of them, but I've been involved in some way or another." />

        <Paragraph text="I'm not going to list all of them, but I'll try to keep this page updated with the most relevant ones. If you want to know more about a specific project, feel free to reach out to me." />
      </section>

      <section className={`${defaultStyles.defaultMargin}`}>
        <div className={`${defaultStyles.cardGrid}`}>
          <div className={`${defaultStyles.cardStyle}`}>
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-600">Website 1</p>
          </div>
          <div className={`${defaultStyles.cardStyle}`}>
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-600">Website 2</p>
          </div>
          <div className={`${defaultStyles.cardStyle}`}>
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="text-gray-600">Website 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
