import React from "react";
import { useTranslation } from "react-i18next";
import { Achievements, Banner, WhyUs } from "../components";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner />
      <WhyUs />
      <Achievements />
    </>
  );
};

export default Home;
