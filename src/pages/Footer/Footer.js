import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as LinkedinIcon } from "../../assets/social-icons/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/social-icons/github-icon.svg";
import { ReactComponent as CVIcon } from "../../assets/social-icons/cv-icon.svg";
import theme from "../../styles/theme";
import { motion, Transition, SVGMotionProps, useAnimation } from "framer-motion";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: ${theme.colors.darkGray};
  padding: 0 20px;
`;

const EmptyDiv = styled.div`
  width: 33%;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  width: 34%;
  justify-content: center;
  cursor: pointer;
  svg:hover {
    path {
      fill: ${theme.colors.purple};
      fill-opacity: 1;
    }
  }
`;

const Copyright = styled.p`
  width: 33%;
  text-align: right;
  color: ${theme.colors.gray};
`;

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <EmptyDiv></EmptyDiv>
        <SocialIcons>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <LinkedinIcon />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <GithubIcon />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <CVIcon />
          </motion.div>
        </SocialIcons>
        <Copyright>© Copyright Adam Kowalczuk</Copyright>
      </StyledFooter>
    );
  }
}
