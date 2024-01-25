import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact, FaJava } from "react-icons/fa";

import { SiTailwindcss, SiFigma, SiPostgresql } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Student.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-gray-200 text-lg font-semibold">
          WELCOME TO MY PAGE
        </h4>
        <h1 className="text-6xl font-bold text-white">
          <span className="text-gray-200 capitalize">Aldren Peshaia</span>
        </h1>
        <h2 className="text-4xl font-bold text-designColor">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <div className="text-base font-bodyFont text-white leading-6 tracking-wider space-y-4">
          <p>
            I was born in 2002 in Finland, and in 2006 both my parents moved to
            Sweden for a better future.
          </p>
          <p>
            I always had a passion for technology when I was younger. Later at
            my age, I learned to code with Java, and that became my hobby.
          </p>
          <p>
            During my high school days, I learned a lot about web development,
            using basic HTML & CSS. I also learned C# during my high school
            years.
          </p>
          <p>
            Currently I'm studying at Gothenburg as a Java Developer. We use a
            lot of JavaScript/React for our frontend and Java to manage the
            backend.
          </p>
          <p>
            Today i like to invest most of my time in learing PostgreSQL, it's
            really enjoyable to spend time to know the power of databases.
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0  justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            My Socials
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/AldrenPeshaia" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aldren-peshaia-35a342252/"
              target="_blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="gap-4 grid grid-cols-4">
            <span className="bannerIcon">
              <FaReact />
            </span>

            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
