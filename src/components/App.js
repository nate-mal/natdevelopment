import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./ui/Header";
import theme1 from "../themes/theme1";
import Home from "./Home";
function App() {
  return (
    <ThemeProvider theme={theme1}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/revolution" element={<div>Revolution Page</div>} />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
