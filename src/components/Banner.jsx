import { useTranslation } from "react-i18next";
import { style } from "../util/style";
import TechnologyList from "./TechnologyList";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-grey pt-[80px] pb-[50px]">
      <div
        className={`${style.container} flex gap-12 text-center lg:text-start flex-col lg:flex-row mb-[60px]`}
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
