import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-[calc(100%-92px)] w-full bg-[#000000] flex flex-row">
      <div className="flex flex-col left-2 mt-2 rounded-lg min-w-[280px] max-w-[420px] h-full mx-2 resize-x overflow-auto gap-2">
        <Navbar />

        <div className="h-full bg-[#121212] rounded-lg">Library</div>
      </div>

      <div className="w-full bg-[#121212] mr-2 mt-2 h-full rounded-lg">
        right side stuff
      </div>

      <Footer />
    </div>
  );
}

export default Home;
