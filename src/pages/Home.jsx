import React from "react";
import { useTranslation } from "react-i18next";
import { Achievements, Banner, Graduates, WhyUs } from "../components";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner />
      <Graduates />
      <WhyUs />
      <Achievements />
    </>
  );
};

export default Home;
