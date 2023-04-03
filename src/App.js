import Nav from "./pages/Nav/Nav";
import Footer from "./pages/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import React, { Component } from "react";
import "./app.css";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 50px;
  margin-top: 70px;
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <StyledWrapper id="about">
          <About />
          <Skills />
          <Projects />
        </StyledWrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
