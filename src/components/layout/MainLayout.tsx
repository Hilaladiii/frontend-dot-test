import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Outlet />
    </div>
  );
};

export default MainLayout;
