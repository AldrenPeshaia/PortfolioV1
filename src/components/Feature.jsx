import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import {
  FaReact,
  FaJava,
  FaMobile,
  FaGlobe,
  FaDatabase,
  FaAws,
} from "react-icons/fa";

import { FiFigma } from "react-icons/fi";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <Title des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 ">
          <Card
            title="Web Development"
            des="Javascript, HTML & CSS is what I usually create the websites with but I can also create website with using react & tailwindcss.  "
            icon={<FaReact />}
          />
          <Card
            title="Database"
            des="Good experience within PostgreSQL and MongoDB."
            icon={<FaDatabase />}
          />
          <Card
            title="Backend"
            des="Really good experience with creating backend with Spring Boot and Express.js."
            icon={<FaJava />}
          />
          <Card
            title="Figma Desgins"
            des="Good experience with creating desgins on Figma and also with the user flow."
            icon={<FiFigma />}
          />
          <Card
            title="React Native"
            des="Currently learning React Native (will be an actual feature in the future). "
            icon={<FaMobile />}
          />
          <Card
            title="AWS"
            des="Hosting services, storage etc. at Amazon Web Service."
            icon={<FaAws />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
