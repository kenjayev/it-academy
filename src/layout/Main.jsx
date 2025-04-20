import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="mt-15 sm:mt-25 md:mt-40">
      <Outlet />
    </main>
  );
};

export default Main;
