import { Outlet } from "react-router-dom";
// import MainHeader from "./components/headers/MainHeader";

// import Home from "./pages/Home";

function Root() {
  return (
    <>
      <Outlet />
      {/* <Home /> */}
      {/* <MainHeader />
      <Link to="login">Login</Link> */}
    </>
    // <h1 className="text-3xl font-bold underline">Hello world!</h1>
  );
}

export default Root;
