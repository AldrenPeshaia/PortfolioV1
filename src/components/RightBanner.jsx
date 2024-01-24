import AldrenPicture from "../assets/images/AldrenPicture.png";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[250px] lgl:w-[500px] lgl:h-[325px] z-10"
        src={AldrenPicture}
        alt=""
      />
      <div className="absolute bottom-0 w-[350px] h-[250px] lgl:w-[500px] lgl:h-[325px] bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-shadowOne flex justify-center items-center"></div>
    </FadeIn>
  );
};

export default RightBanner;
