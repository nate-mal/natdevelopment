import Header from "./ui/Header";
import theme1 from "../themes/theme1";
import LandingPage from "./LandingPage";
import Footer from "./ui/Footer";
import "aos/dist/aos.css";

import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import AOS from "aos";
import { useState } from "react";

import ScrollToTop from "./helpers/ScrollToTop";
import ServicesPage from "./ServicesPage";
import CustomSoftwarePage from "./CustomSoftwarePage";
import MobileDevelopmentPage from "./MobileDevelopmentPage";
import WebsitesDevelopmentPage from "./WebsitesDevelopment";
import RevolutionPage from "./RevolutionPage";
import AboutUsPage from "./AboutUsPage";
import ContactUs from "./ContactUs";
import EstimatePage from "./EstimatePage";
function App() {
  const options = useMemo(
    () => [
      { name: "Home", link: "/" },

      {
        name: "Servicii",
        link: "/services",
        subs: [
          { name: "Servicii", link: "/services", index: 1 },
          {
            name: "Custom Software Development",
            link: "/customsoftware",
          },
          { name: "IOS/Android App Development", link: "/mobileapps" },
          { name: "Website Development", link: "/websites" },
        ],
      },
      {
        name: "The Revolution",
        link: "/revolution",
      },
      {
        name: "About Us",
        link: "/about",
        // subs: [{ name: "About Us", link: "/about", index: 3 }],
      },
      {
        name: "Contact Us",
        link: "/contact",
        // subs: [{ name: "Contact Us", link: "/contact", index: 4 }],
      },
    ],
    []
  );
  const estimate = { name: "Free Estimate", link: "/estimate" };

  const [activeValue, setActiveValue] = useState(0);
  const [activeSubValue, setActiveSubValue] = useState(null);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <ThemeProvider theme={theme1}>
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <BrowserRouter>
          <Header
            options={options}
            specialOption={estimate}
            value={activeValue}
            setValue={setActiveValue}
            subValue={activeSubValue}
            setSubValue={setActiveSubValue}
          />
          <ScrollToTop>
            <Routes>
              <Route
                path="/natdevelopment/"
                element={
                  <LandingPage
                    setValue={setActiveValue}
                    setSubValue={setActiveSubValue}
                  />
                }
              />
              <Route
                exact
                path="/natdevelopment/services"
                element={
                  <ServicesPage
                    setValue={setActiveValue}
                    setSubValue={setActiveSubValue}
                  />
                }
              />
              <Route
                exact
                path="/natdevelopment/customsoftware"
                element={<CustomSoftwarePage />}
              />
              <Route
                exact
                path="/natdevelopment/mobileapps"
                element={<MobileDevelopmentPage />}
              />
              <Route
                exact
                path="/natdevelopment/websites"
                element={<WebsitesDevelopmentPage />}
              />
              <Route
                exact
                path="/natdevelopment/revolution"
                element={<RevolutionPage />}
              />
              <Route
                exact
                path="/natdevelopment/about"
                element={<AboutUsPage />}
              />
              <Route
                exact
                path="/natdevelopment/contact"
                element={<ContactUs />}
              />
              <Route
                exact
                path="/natdevelopment/estimate"
                element={<EstimatePage />}
              />
            </Routes>
          </ScrollToTop>
          <Footer
            options={options}
            value={activeValue}
            setValue={setActiveValue}
            subValue={activeSubValue}
            setSubValue={setActiveSubValue}
          />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
