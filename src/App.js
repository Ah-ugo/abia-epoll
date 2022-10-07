import "./css files/library.css";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Vote } from "./pages/vote";
import { Categories } from "./pages/categories";
import { Ikonne } from "./pages/Candidates/Ikonne";
import { Otti } from "./pages/Candidates/otti";
import { ChakraProvider } from "@chakra-ui/react";
import MainVotingPage from "./pages/Governorship";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/governorship" element={<MainVotingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
