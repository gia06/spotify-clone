import Footer from "../components/Footer";

function Home() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full h-full p-2">
      <div className="text-center">Navbar</div>
      <div className="flex flex-row items-center justify-center col-span-2 row-span-2 text-center">
        Home
      </div>
      <div className="h-5/6 text-center">Library</div>
      <Footer />
    </div>
  );
}

export default Home;
