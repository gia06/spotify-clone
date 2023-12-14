import { Outlet } from "react-router-dom";
// import MainHeader from "./components/headers/MainHeader";

// import Home from "./pages/Home";

function Root() {
  return (
    <div className="h-screen bg-black">
      <Outlet />
      {/* <Home /> */}
      {/* <MainHeader />
      <Link to="login">Login</Link> */}
    </div>
    // <h1 className="text-3xl font-bold underline">Hello world!</h1>
  );
}

export default Root;
