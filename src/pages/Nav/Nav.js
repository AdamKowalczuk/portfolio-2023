import React from "react";
import styled from "styled-components";
import Logo from "../../assets/AK.svg";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
  background-color: ${theme.colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-right: 5px;
  padding-left: 10px;
  position: fixed;
  top: 0;
  width: calc(100% - 15px);
  svg {
    padding: 10px;
  }
`;

const NavLogo = styled.div``;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Li = styled.li`
  float: right;
  a {
    display: block;
    color: ${theme.colors.gray};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover {
    color: #fff;
  }
`;

const MenuButton = ({ isOpen = false, width = 24, height = 24, strokeWidth = 1, color = "#000", transition = null, lineProps = null, ...props }) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  return (
    <motion.svg viewBox={`0 0 ${unitWidth} ${unitHeight}`} overflow="visible" preserveAspectRatio="none" width={width} height={height} {...props}>
      <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
      <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
    </motion.svg>
  );
};

export default function Nav() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <StyledNav>
      <NavLogo>
        <img src={Logo} alt="logo"></img>
      </NavLogo>

      {window.innerWidth < 600 ? (
        <>
          {isOpen ? (
            <Ul>
              <Li>
                <a href="#projects">Projects</a>
              </Li>
              <Li>
                <a href="#skills">Skills</a>
              </Li>
              <Li>
                <a href="#about">About</a>
              </Li>
            </Ul>
          ) : null}
          <MenuButton
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
            strokeWidth="6"
            color="#5132c0"
            lineProps={{ strokeLinecap: "round" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        </>
      ) : (
        <Ul>
          <Li>
            <a href="#projects">Projects</a>
          </Li>
          <Li>
            <a href="#skills">Skills</a>
          </Li>
          <Li>
            <a href="#about">About</a>
          </Li>
        </Ul>
      )}
    </StyledNav>
  );
}
