import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppStore } from "../store";
import Top from "../components/new_layout/Top";
import Privadas_por from "../components/new_layout/Privadas_por";
import Servicios from "../components/new_layout/Servicios";
import Generamos from "../components/new_layout/Generamos";
import Logrado from "../components/new_layout/logrado";
import WhyChooseSection from "../components/new_layout/WhyChooseSection";
import StatsSection from "../components/new_layout/StatsSection";
import ContactForm from "../components/new_layout/ContactForm";
import Footer from "../components/new_layout/Footer";

const New = () => {
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
        <Top />
        <Privadas_por />
        <Servicios />
        <Generamos />
        <Logrado />
        <WhyChooseSection />
        <StatsSection />
        <ContactForm />
        <Footer />
    </>
  );
};

export default New;