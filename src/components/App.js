import Header from "./ui/Header";
import theme1 from "../themes/theme1";
import LandingPage from "./LandingPage";
import Footer from "./ui/Footer";

import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
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
        subs: [
          { name: "About Us", link: "/about", index: 3 },
          {
            name: "Our team",
            link: "/team",
          },
          { name: "What others tell about us", link: "/reviews" },
        ],
      },
      {
        name: "Contact Us",
        link: "/contact",
        subs: [
          { name: "Contact Us", link: "/contact", index: 4 },
          { name: "Address", link: "/address" },
        ],
      },
    ],
    []
  );
  const estimate = { name: "Free Estimate", link: "/estimate" };

  const [activeValue, setActiveValue] = useState(0);
  const [activeSubValue, setActiveSubValue] = useState(null);
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
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route exact path="/services" element={<div>Services Page</div>} />
            <Route
              exact
              path="/customsoftware"
              element={<div>Custom Software Page</div>}
            />
            <Route
              exact
              path="/mobileapps"
              element={<div>Mobile Apps Page</div>}
            />
            <Route
              exact
              path="/websites"
              element={<div>Mobile aps Page</div>}
            />
            <Route
              exact
              path="/revolution"
              element={<div>Revolution Page</div>}
            />
            <Route exact path="/about" element={<div>About Page</div>} />
            <Route exact path="/team" element={<div>Team Page</div>} />
            <Route exact path="/reviews" element={<div>Reviews Page</div>} />
            <Route exact path="/contact" element={<div>Contact Page</div>} />
            <Route exact path="/address" element={<div>Address Page</div>} />
            <Route exact path="/estimate" element={<div>Estimate Page</div>} />
          </Routes>
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
