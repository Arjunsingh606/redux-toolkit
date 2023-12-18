import React, { useState } from "react";
import StateComp from "./components/StateComp";
import Memo from "./components/Memo";
import UseState from "./components/UseState";
import Checkbox from "./components/Checkbox";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";
import UseRef from "./Hooks/UseRef";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

const App = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop:'3rem',
          gap:'2rem'
        }}
      >

       <Counter/> 
       <Counter1/>
        {/* <h2>React Routing</h2>
        <BrowserRouter>
          <Link to="">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Routes>
            <Route exact path="" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </BrowserRouter> */}

        {/* <StateComp/> */}
        {/* <Memo /> */}
        {/* <UseState /> */}
        {/* <Checkbox/> */}
        {/* <UseRef /> */}
      </div>
    </>
  );
};
export default App;
