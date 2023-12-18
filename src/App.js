import React from "react";
import CardTop from "./components/CardTop";
import About from "./components/About";
import CardFooter from "./components/CardFooter";
import Interest from "./components/interest";
import "../src/style.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <CardTop />
        <About />
        <Interest />
        <CardFooter />
      </div>
    </div>
  );
}
