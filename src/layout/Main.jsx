import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="bg-gray-50">
      <Outlet />
    </main>
  );
};

export default Main;
