import Header from "./components/Header";
import MoreAbout from "./components/MoreAbout";
import MyJob from "./components/MyJob";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="bg-linear-to-b from-[#95DEED] via-[#AFBAEC] to-[#ECB4E5]">
        <Navbar />
        <Header />
        <div className="bg-primary-950">
          <MoreAbout />
        </div>
        <div className="bg-linear-to-b from-[#ECB4E5] via-[#AFBAEC] to-[#95DEED]">
          <MyJob />
          <Services />
        </div>
      </div>
    </>
  );
}

export default App;
