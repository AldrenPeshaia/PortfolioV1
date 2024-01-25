import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import projectOne from "../assets/images/projects/projectOne.jpg";
import projectTwo from "../assets/images/projects/projectTwo.jpg";
import projectThree from "../assets/images/projects/projectThree.jpg";
import projectFour from "../assets/images/projects/projectFour.png";
import projectFive from "../assets/images/projects/projectFive.png";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title des="My Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Github Finder"
            des=" Using React and Tailwind CSS I created a GitHub finder."
            src={projectOne}
          />
          <ProjectsCard
            title="Feedback App"
            des=" Using React and CSS I created a feedback app where I can rate and also comment feedback on my website."
            src={projectTwo}
          />
          <ProjectsCard
            title="Spring Boot backend and postgresql"
            des="Schoolwork when my group and I created a working database with everything that was needed."
            src={projectThree}
          />
          <ProjectsCard
            title="Bilbay Fullstack Application"
            des="Basic auction website with backend features. This was done together with my school group."
            src={projectFour}
          />
          <ProjectsCard
            title="Healthcare Fullstack Application"
            des="Healthcare website with backend features inclouding booking, scheduling, authenticate and user roles. This was done together with my school group."
            src={projectFive}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
