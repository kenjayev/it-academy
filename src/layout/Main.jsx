import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="mt-15 sm:mt-[70px] md:mt-[130px]">
      <Outlet />
    </main>
  );
};

export default Main;
