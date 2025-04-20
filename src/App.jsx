import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Layouts
import { Footer, Header, Main } from "./layout";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1200,
      delay: 0,
      // once: true, // Faqat bir marta ishlashi uchun
    });
  });
  return (
    <>
      {/* Boshqa komponentlaringiz */}
      <ToastContainer
        position="top-right"
        autoClose={3000} // 3 sekunddan so‘ng o‘chadi
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // orqa fon oq bo‘ladi
      />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
