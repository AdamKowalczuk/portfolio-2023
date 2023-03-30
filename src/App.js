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
  padding: 20px;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router> */}
        <Nav />
        {/* <Routes> */}
        {/* <Route exact path="/" element={<About />}></Route> */}
        <StyledWrapper>
          <About />
          <Skills />
          <Projects />
        </StyledWrapper>

        {/* <Route path="/" element={<Skills />}></Route>
            <Route path="/" element={<Projects />}></Route> */}
        {/* </Routes> */}
        <Footer />
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
