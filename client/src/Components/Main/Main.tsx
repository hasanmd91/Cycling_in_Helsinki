import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <main style={{ minHeight: " 100vh" }}>
      <Outlet />
    </main>
  );
};

export default Main;
