import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ChangeLng from "../components/ChangeLng";
import { style } from "../util/style";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="shadow-xl">
      <div className="bg-main w-full text-white py-2 hidden md:block shadow-md">
        <div className={`${style.container} flex justify-between items-center`}>
          <ChangeLng />
          <div className="flex items-center gap-6">
            <a
              href="tel:+998947820092"
              className="animate-on-load hover:text-gray-200 transition-all duration-300 text-center transform hover:shadow-lg flex items-center gap-2"
              style={{
                animation: "1s ease-out 0s 1 normal forwards running fadeInUp",
              }}
            >
              <img src="/img/icon/tel.svg" alt="" />
              +998 (94) 782 00 92
            </a>
            <a
              href="https://t.me/it_time"
              className="animate-on-load hover:text-gray-200 transition-all duration-300 text-center transform hover:shadow-lg flex items-center gap-2"
              style={{
                animation: "1s ease-out 0s 1 normal forwards running fadeInUp",
              }}
            >
              <img src="/img/icon/telegram.svg" alt="" />
              {t("header.telegram")}
            </a>
            <a
              href="https://t.me/it_time_admin"
              className="px-4 py-1 border border-white rounded-full animate-on-load hover:text-red-600 hover:bg-white transition-all duration-300 text-center transform hover:shadow-lg flex items-center gap-2"
              style={{
                animation: "1s ease-out 0s 1 normal forwards running fadeInUp",
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
              </svg>
              {t("header.contact")}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 shadow-lg">
        <div className={`${style.container} flex items-center justify-between`}>
          <NavLink to="/" className="logo">
            <img
              className="w-[140px]"
              src="/img/logo.png"
              alt="IT TIME ACADEMY Logo"
              title="IT TIME ACADEMY - Programming Courses in Uzbekistan"
              loading="eager"
              width="140"
              height="auto"
            />
          </NavLink>

          <nav className="hidden md:flex items-center ml-6 space-x-[14px]">
            <NavLink
              to="/"
              className="nav-link text-lg font-semibold text-tDark hover:text-main transition-colors duration-300"
            >
              {t("header.navLink1")}
            </NavLink>
            <div className="nav-separator"></div>
            <NavLink
              to="/courses"
              className="nav-link text-lg font-semibold text-tDark hover:text-main transition-colors duration-300"
            >
              {t("header.navLink2")}
            </NavLink>
            <div className="nav-separator"></div>
            <NavLink
              to="/mentors"
              className="nav-link text-lg font-semibold text-tDark hover:text-main transition-colors duration-300"
            >
              {t("header.navLink3")}
            </NavLink>
            <div className="nav-separator"></div>
            <NavLink
              to="/about"
              className="nav-link text-lg font-semibold text-tDark hover:text-main transition-colors duration-300"
            >
              {t("header.navLink4")}
            </NavLink>
            <div className="nav-separator"></div>
            <NavLink
              to="/contact"
              className="nav-link text-lg font-semibold text-tDark hover:text-main transition-colors duration-300"
            >
              {t("header.navLink5")}
            </NavLink>
            <button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600
                 px-5 py-2.5 text-white font-medium rounded-lg transition-all duration-300
                 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105 cursor-pointer"
            >
              Bepul konsultatsiya
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
