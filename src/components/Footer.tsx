import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between items-center h-[66px] p-3 col-span-3 text-left bg-gradient-to-r from-purple-600 to-blue-400 text-base font-normal absolute bottom-2 w-full ">
      <div>
        <p data-encore-id="type" className="tracking-widest">
          PREVIEW OF SPOTIFY
        </p>
        <p data-encore-id="type" className="">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <Link
        className="flex flex-row  items-center bg-white w-22 text-black h-8 rounded-full py-2  px-8"
        to="/register"
      >
        Sign up free
      </Link>
    </div>
  );
}

export default Footer;
