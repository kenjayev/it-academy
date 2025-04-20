import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { style } from "../util/style";
import TechnologyList from "./TechnologyList";

const Banner = () => {
  const { t } = useTranslation();
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/particles-config.json", () => {
        console.log("Particles.js loaded via CDN ✅");
      });
    }
  }, []);

  return (
    <div className="bg-grey-50 pt-[80px] pb-[50px]">
      <div
        id="particles-js"
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>
      <div
        className={`${style.container} flex gap-12 text-center lg:text-start flex-col lg:flex-row mb-[50px] lg:mb-[115px]`}
      >
        <div className="flex-1 pl-2 lg:pl-12 xl:pl-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-2 mb-6 text-main">
            {t("banner.title")}
          </h2>
          <p className={`${style.textLg} px-2 mb-6`}>{t("banner.desc")}</p>
          <button className={`${style.btnRed} mx-2`}>{t("banner.btn")}</button>
        </div>
        <div className="flex-1"></div>
      </div>
      <TechnologyList />
    </div>
  );
};

export default Banner;
