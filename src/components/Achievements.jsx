import React from "react";
import { style } from "../util/style";

const Achievements = () => {
  return (
    <section className="info-container px-5 py-20 relative overflow-hidden [background:linear-gradient(135deg,#dc2626,#991b1b)]">
      <div className={style.container}>
        <h2
          className="text-center text-white font-semibold text-2xl md:text-3xl lg:text-4xl mb-10 relative text-shadow-[2px_2px_4px_rgba(0_0_0_/_0.3)]"
          data-aos="fade-right"
          data-aos-offset="50"
        >
          Bizning Yutuqlarimiz
        </h2>
        <div className="mb-12 flex flex-wrap sm:grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-4">
          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              🎓
            </div>
            <div className="text-main text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              5+
            </div>
            <div className="text-xl mt-2 text-[#666]">Zamonaviy kurslar</div>
          </div>
          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              👨‍🎓
            </div>
            <div className="text-main text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              500+
            </div>
            <div className="text-xl mt-2 text-[#666]">Bitiruvchilar</div>
          </div>
          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              💼
            </div>
            <div className="text-main text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              80%
            </div>
            <div className="text-xl mt-2 text-[#666]">
              Ishga joylashish darajasi
            </div>
          </div>

          <div
            className="min-w-[150px] flex-1 p-4 md:px-7 md:py-10 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] text-center transition-all duration-300 ease-in-out backdrop-blur-[10px] border border-white/20 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-offset="50"
          >
            <div className="text-[3.5rem] mb-5 text-red-600 [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              🌟
            </div>
            <div className="text-main text-4xl sm:text-5xl font-bold [text-shadow:0_0_20px_rgba(220,38,38,0.3)]">
              4.9
            </div>
            <div className="text-xl mt-2 text-[#666]">O'rtacha reyting</div>
          </div>
        </div>
        <div className="text-center p-12 bg-white/95 rounded-[20px] shadow-[0_15px_30px_#00000026] mt-10 backdrop-blur-[10px] border border-white/20">
          <h3
            data-aos="fade-right"
            data-aos-offset="50"
            className="text-red-600 text-[33px] mb-6 relative"
          >
            IT Time Academy - Kelajak kasblarini o'rganing
          </h3>
          <p
            data-aos="fade-left"
            data-aos-offset="50"
            className="aos-init aos-animate"
          >
            Bizning o'quv markazimiz zamonaviy dasturlash texnologiyalari, mobil
            grafikalar va SMM sohasida professional ta'lim beradi. Tajribali
            o'qituvchilar va amaliy loyihalar orqali siz zamonaviy mutaxassis
            bo'lib yetishasiz.
          </p>
          <div className="achievement-grid">
            <div
              className="achievement-item aos-init aos-animate"
              data-aos-offset="50"
              data-aos="flip-up"
            >
              <div className="achievement-icon">🏆</div>
              <div className="achievement-text">Top IT akademiya</div>
            </div>
            <div
              className="achievement-item aos-init aos-animate"
              data-aos-offset="50"
              data-aos="flip-up"
            >
              <div className="achievement-icon">🌐</div>
              <div className="achievement-text">Xalqaro sertifikatlar</div>
            </div>
            <div
              className="achievement-item aos-init aos-animate"
              data-aos-offset="50"
              data-aos="flip-up"
            >
              <div className="achievement-icon">🤝</div>
              <div className="achievement-text">
                IT kompaniyalar bilan hamkorlik
              </div>
            </div>
            <div
              className="achievement-item aos-init aos-animate"
              data-aos-offset="50"
              data-aos="flip-up"
            >
              <div className="achievement-icon">📚</div>
              <div className="achievement-text">Amaliy ta'lim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
