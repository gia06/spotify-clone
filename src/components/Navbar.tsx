import homeIcon from "/assets/home.svg";
import searchIcon from "/assets/search.svg";
import logo from "/assets/musicify.svg";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="w-full h-[156px] flex flex-col justify-center gap-2 pl-3 bg-[#121212] rounded-lg text-base font-bold">
      <NavbarItem imgPath={logo} label="Musicify" />
      <NavbarItem imgPath={homeIcon} label="Home" />
      <NavbarItem imgPath={searchIcon} label="Search" />
    </div>
  );
}

export default Navbar;
