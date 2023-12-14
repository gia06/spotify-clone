interface NavbarItemProps {
  imgPath: string;
  label: string;
}

function NavbarItem({ imgPath, label }: NavbarItemProps) {
  return (
    <div className="flex flex-row items-center ">
      <img src={imgPath} alt="home icon" className="w-8 h-8" />
      <label className="ml-5">{label}</label>
    </div>
  );
}

export default NavbarItem;
