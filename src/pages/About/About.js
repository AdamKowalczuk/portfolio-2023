import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Avatar from "../../assets/avatar.png";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
  }
`;

const AboutWelcome = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const AboutDescription = styled.div`
  background: linear-gradient(180deg, rgba(81, 50, 192, 0.5) 0%, #5132c0 100%);
  border-radius: 12px;
  width: 90%;
  margin: auto;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  h3 {
    margin-top: 0;
  }
  p {
    color: ${theme.colors.gray};
  }
  @media only screen and (max-width: 600px) {
    width: auto;
    margin: 10px;
  }
`;

const AboutAvatar = styled.div`
  margin: auto;
  img {
    width: 100%;
    background-size: contain;
    height: 500px;
  }
  @media only screen and (max-width: 600px) {
    img {
      height: auto;
    }
  }
`;

export default class About extends Component {
  render() {
    return (
      <>
        <AboutWrapper id="about">
          <AboutWelcome>
            <h4>Welcome to my portfolio</h4>
            <h1>I’m Adam, a React Frontend Developer</h1>
          </AboutWelcome>

          <AboutAvatar>
            <img src={Avatar} />
          </AboutAvatar>
        </AboutWrapper>
        <AboutDescription>
          <h3>Something about me</h3>
          <p>
            I am a selftaught front-end developer. I primarily focus on writing clean, elegant, and efficient code. Besides programming, I also love
            adrenaline. I take part in various races, from Runmageddon to Marathons.
          </p>
        </AboutDescription>
      </>
    );
  }
}
