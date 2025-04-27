import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as LinkedinIcon } from "../../assets/social-icons/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/social-icons/github-icon.svg";
import { ReactComponent as CVIcon } from "../../assets/social-icons/cv-icon.svg";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0 12px 0;
  background-color: ${theme.colors.darkGray};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
    transition: fill 0.2s;
    cursor: pointer;
    fill: currentColor;
    color: ${theme.colors.gray};
  }
  svg:hover {
    
    path {
      fill: ${theme.colors.purple};
      fill-opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    gap: 18px;
    padding-top: 10px;
  }
`;

const Copyright = styled.p`
  text-align: center;
  color: ${theme.colors.gray};
  font-size: 15px;
  margin: 12px 0 0 0;
  width: 100%;
`;

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
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
        <Copyright>
          © {new Date().getFullYear()} Adam Kowalczuk
        </Copyright>
      </StyledFooter>
    );
  }
}
