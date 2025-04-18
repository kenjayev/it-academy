import React from "react";
import { useTranslation } from "react-i18next";
import { style } from "../util/style";

const WhyUs = () => {
  const { t } = useTranslation();
  const servicesArr = [
    {
      title: t("whyUs.item1.title"),
      desc: t("whyUs.item1.desc"),
    },
    {
      title: t("whyUs.item2.title"),
      desc: t("whyUs.item2.desc"),
    },
    {
      title: t("whyUs.item3.title"),
      desc: t("whyUs.item3.desc"),
    },
    {
      title: t("whyUs.item4.title"),
      desc: t("whyUs.item4.desc"),
    },
    {
      title: t("whyUs.item5.title"),
      desc: t("whyUs.item5.desc"),
    },
    {
      title: t("whyUs.item6.title"),
      desc: t("whyUs.item6.desc"),
    },
  ];
  console.log(servicesArr);
  return (
    <section className="pt-16 pb-10 bg-gray-50">
      <h2 className={`${style.sectionTitle}`}>{t("whyUs.title")}</h2>
      <div className="flex flex-col space-y-8 p-4 md:p-12">
        {servicesArr.map((item) => (
          <div className="perspective-1000">
            <div className="p-8 md:p-12 group relative bg-white shadow-2xl rounded-2xl overflow-hidden translate-z-0 hover:translate-z-[35px] transition-all duration-600">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 glitch-text text-shadow-[2px_2px_4px_rgba(0_0_0_/_0.1)]">
                {item.title}
              </h3>
              <div className="relative h-1 w-32 mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                <div className="absolute inset-0 bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
              </div>
              <p
                className={`${style.textLg} p-2 rounded-xl backdrop-blur-sm bg-gradient-to-r from-red-500/2 to-red-500/4 highlight-scanner rounded-xl`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
