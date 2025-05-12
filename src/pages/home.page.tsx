import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppStore } from "../store";
import Header from "../components/Layout/header/Header";
import Footer from "../components/Layout/footer/Footer";
import TopSection from "../components/Layout/homepage/TopSection";
import EasierSection from "../components/Layout/homepage/easierSection/EasierSection";
import FinancialSection from "../components/Layout/homepage/financialSection/FinancialSection";
import PricingComparison from "../components/Layout/homepage/PricingComparison";
import Imonials from "../components/Layout/homepage/imonoals/Imonials";
import LearnMore from "../components/Layout/homepage/learnMore/LearnMore";
const HomePage = () => {
  const { getUser, loginWithToken, authUser } = useAppStore.authStore.getState();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");

    if (token) {
      loginWithToken(token);
    }

    getUser();
  }, [search, getUser]);

  useEffect(() => {
    console.log(authUser);
  })

  return (
    <>
      <Header />
      <div className="max-w-6xl md:mx-auto mx-6">
        <TopSection />
        <EasierSection />
        <FinancialSection />
        <PricingComparison />
        <Imonials />
        <LearnMore />
      </div>
      <Footer />
      </>
  );
};

export default HomePage;