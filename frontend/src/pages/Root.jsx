import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "2rem" }}>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
