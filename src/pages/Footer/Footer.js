import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as LinkedinIcon } from "../../assets/social-icons/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/social-icons/github-icon.svg";
import { ReactComponent as CVIcon } from "../../assets/social-icons/cv-icon.svg";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: ${theme.colors.darkGray};
  padding: 0 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

const EmptyDiv = styled.div`
  width: 33%;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  width: 34%;
  justify-content: center;
  svg {
    cursor: pointer;
  }
  align-items: center;
  svg:hover {
    path {
      fill: ${theme.colors.purple};
      fill-opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    padding-top: 10px;
    svg {
      // width: 12px;
    }
  }
`;

const Copyright = styled.p`
  width: 33%;
  text-align: right;
  color: ${theme.colors.gray};
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    // font-size: 12px;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <EmptyDiv></EmptyDiv>
        <SocialIcons>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="https://www.linkedin.com/in/adamkowalczuk/" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="https://github.com/AdamKowalczuk/" target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="/CV.pdf" target="_blank" rel="noreferrer">
              <CVIcon />
            </a>
          </motion.div>
        </SocialIcons>
        <Copyright>&copy; Copyright Adam Kowalczuk</Copyright>
      </StyledFooter>
    );
  }
}
