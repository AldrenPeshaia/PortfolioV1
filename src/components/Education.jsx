import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Electricity & Energy IT"
            subTitle="Realgymnasiet high school (2018 - 2021)"
            result="4.99/5"
            des="We had a lot of web desgins in our classes, such as HTML and CSS."
          />
          <ResumeCard
            title="Base year"
            subTitle="Linköping University (2021 - 2022)"
            result="3.55/5"
            des="During this year I studied maths, physics and chemistry."
          />
          <ResumeCard
            title="Java Developer"
            subTitle="Gothenburg Teknikhögskola (2022 - 2024)"
            result="5.00/5"
            des="My current education. We mostly use React, Javascript, HTML and CSS, and manage the backend with Spring Boot. "
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Trainee Web Developer "
            subTitle="Nordic Executive Medicine"
            result="Sweden"
            des="Worked on their portal with using Reactjs and Tailwindcss."
          />
          <ResumeCard
            title="Summer job Web Developer"
            subTitle="Nordic Executive Medicine"
            result="Sweden"
            des="Worked on their portal with using Reactjs and Tailwindcss. Had my own responsibilies alot in this project."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
