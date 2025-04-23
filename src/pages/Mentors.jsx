import React from "react";
import { ImLinkedin } from "react-icons/im";
import { useTranslation } from "react-i18next";

const mentorsArr = [
  {
    imgSrc: "/img/mentor1.jpg",
    fullName: "mentors.mentor1.fullName",
    job: "mentors.mentor1.job",
    desc: "mentors.mentor1.desc",
    technologies: [
      "mentors.mentor1.technologies1",
      "mentors.mentor1.technologies2",
      "mentors.mentor1.technologies3",
      "mentors.mentor1.technologies4",
      "mentors.mentor1.technologies5",
      "mentors.mentor1.technologies6",
      "mentors.mentor1.technologies7",
    ],
  },
  {
    imgSrc: "/img/mentor1.jpg",
    fullName: "mentors.mentor1.fullName",
    job: "mentors.mentor1.job",
    desc: "mentors.mentor1.desc",
    technologies: [
      "mentors.mentor1.technologies1",
      "mentors.mentor1.technologies2",
      "mentors.mentor1.technologies3",
      "mentors.mentor1.technologies4",
      "mentors.mentor1.technologies5",
      "mentors.mentor1.technologies6",
      "mentors.mentor1.technologies7",
    ],
  },
  {
    imgSrc: "/img/mentor1.jpg",
    fullName: "mentors.mentor1.fullName",
    job: "mentors.mentor1.job",
    desc: "mentors.mentor1.desc",
    technologies: [
      "mentors.mentor1.technologies1",
      "mentors.mentor1.technologies2",
      "mentors.mentor1.technologies3",
      "mentors.mentor1.technologies4",
      "mentors.mentor1.technologies5",
      "mentors.mentor1.technologies6",
      "mentors.mentor1.technologies7",
    ],
  },
  {
    imgSrc: "/img/mentor1.jpg",
    fullName: "mentors.mentor1.fullName",
    job: "mentors.mentor1.job",
    desc: "mentors.mentor1.desc",
    technologies: [
      "mentors.mentor1.technologies1",
      "mentors.mentor1.technologies2",
      "mentors.mentor1.technologies3",
      "mentors.mentor1.technologies4",
      "mentors.mentor1.technologies5",
      "mentors.mentor1.technologies6",
      "mentors.mentor1.technologies7",
    ],
  },
  {
    imgSrc: "/img/mentor1.jpg",
    fullName: "mentors.mentor1.fullName",
    job: "mentors.mentor1.job",
    desc: "mentors.mentor1.desc",
    technologies: [
      "mentors.mentor1.technologies1",
      "mentors.mentor1.technologies2",
      "mentors.mentor1.technologies3",
      "mentors.mentor1.technologies4",
      "mentors.mentor1.technologies5",
      "mentors.mentor1.technologies6",
      "mentors.mentor1.technologies7",
    ],
  },
];

const Mentors = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
            data-aos="fade-left"
            data-aos-offset="100"
          >
            {t("mentors.title")}
          </h2>
          <p
            class="mt-4 text-xl text-gray-600"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            {t("mentors.subtitle")}
          </p>
        </div>
        <div className="space-y-8">
          {mentorsArr.map((item) => (
            <MentorCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MentorCard = ({ fullName, job, desc, technologies, imgSrc }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">
      <div
        className="relative w-full md:w-[280px] aos-init aos-animate"
        data-aos="fade-left"
        data-aos-offset={100}
      >
        <img
          src={imgSrc}
          alt="Rustambek Mamadaliyev - Senior Frontend o'qituvchisi at IT TIME ACADEMY"
          className="w-full h-[250px] md:h-[280px] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <a
              href="https://uz.linkedin.com/in/rustambek-mamadaliyev-39b095214?original_referer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl bg-blue-600/80 p-2 rounded-lg"
              aria-label="Rustambek Mamadaliyev LinkedIn profile"
            >
              <ImLinkedin />
            </a>
            <a
              href="https://t.me/the_rustambek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl bg-blue-400/80 p-2 rounded-lg"
              aria-label="Rustambek Mamadaliyev Telegram profile"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
              </svg>
            </a>
            <a
              href="https://github.com/the-rustambek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl bg-gray-800/80 p-2 rounded-lg"
              aria-label="Rustambek Mamadaliyev GitHub profile"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex-1 p-5 md:p-6 flex flex-col aos-init aos-animate"
        data-aos="fade-right"
        data-aos-offset={100}
      >
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{t(fullName)}</h3>
          <p className="text-base text-gray-600 mt-1">{t(job)}</p>
        </div>
        <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
          {t(desc)}
        </p>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {t("mentors.specialty")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span className="px-2.5 py-1 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full text-xs font-medium">
                {t(item)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
