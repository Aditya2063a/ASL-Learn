import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Learn from "./Components/Learn";
import Test from "./Components/Test";
import About from "./Components/About";

function App() {

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
