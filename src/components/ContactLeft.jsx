import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full  bg-gradient-to-r from-[#949b97] to-[#000000] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aldren Peshaia</h3>
        <p className="text-lg font-normal text-white">Full Stack Developer</p>
        <p className="text-base text-white tracking-wide">
          You can contact me by typing in the input or either in my socials. I'm
          gonna try my best to answer as soon as possible.
        </p>

        <p className="text-base text-white flex items-center gap-2">
          Email: <span className=" text-white">Aldrenpeshaia@hotmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-white">
          My socials
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
    </div>
  );
};

export default ContactLeft;
