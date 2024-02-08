import React from "react"
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Lab from "./components/Lab";
import { NavLink } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Header from "./components/Header";


function App() {


  return (
    <div className="flex flex-col m-[150px] font-serif items-center ">
      <div className="flex flex-col gap-2">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/lab">Lab</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
