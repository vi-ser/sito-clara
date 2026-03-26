import { useEffect, useState } from "react";
import CookiePolicy from "./components/CookiePolicy";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoreAbout from "./components/MoreAbout";
import MyJob from "./components/MyJob";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  const getLegalRoute = () =>
    window.location.hash.replace(/^#/, "").replace(/\/+$/, "") || "/";
  const [legalRoute, setLegalRoute] = useState(getLegalRoute);
  const isPrivacyPage = legalRoute === "/privacy-policy";
  const isCookiePage = legalRoute === "/cookie-policy";

  useEffect(() => {
    const handleHashChange = () => setLegalRoute(getLegalRoute());

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (isPrivacyPage) {
      document.title = "Privacy Policy | Clara Nannelli";
      return;
    }

    if (isCookiePage) {
      document.title = "Cookie Policy | Clara Nannelli";
      return;
    }

    document.title = "Clara Nannelli | Psicologa";
  }, [isCookiePage, isPrivacyPage]);

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  if (isCookiePage) {
    return <CookiePolicy />;
  }

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
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
