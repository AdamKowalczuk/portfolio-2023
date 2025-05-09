import React from "react";
import styled from "styled-components";
import Logo from "../../assets/AK.svg";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
  background-color: ${theme.colors.darkGray};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 50px;
  @media only screen and (max-width: 600px) {
    padding: 0 24px;
  }
`;

const NavLogo = styled.div`
  img {
    cursor: pointer;
  }
`;

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
    cursor: pointer;
    transition: color 0.2s;
  }
  a:hover, a:focus {
    color: #fff;
  }
`;

function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

const menuLinks = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
];

const scrollIntoView = (item) => {
  let element = document.getElementById(item);
  if (!element) return;
  const yOffset = -90;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

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
  const width = useWindowWidth();

  const handleMenuClick = (id) => {
    scrollIntoView(id);
    setOpen(false);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleMenuClick(id);
    }
  };

  return (
    <StyledNav>
      <NavContent>
        <NavLogo>
          <img src={Logo} alt="logo" onClick={() => scrollIntoView("about")}/>
        </NavLogo>
        {width < 600 ? (
          <>
            {isOpen ? (
              <Ul>
                {menuLinks.map(link => (
                  <Li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={e => { e.preventDefault(); handleMenuClick(link.id); }}
                      tabIndex={0}
                      onKeyDown={e => handleKeyDown(e, link.id)}
                    >
                      {link.label}
                    </a>
                  </Li>
                ))}
              </Ul>
            ) : null}
            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="6"
              color="#5132c0"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(!isOpen); }}
            />
          </>
        ) : (
          <Ul>
            {menuLinks.map(link => (
              <Li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={e => { e.preventDefault(); handleMenuClick(link.id); }}
                  tabIndex={0}
                  onKeyDown={e => handleKeyDown(e, link.id)}
                >
                  {link.label}
                </a>
              </Li>
            ))}
          </Ul>
        )}
      </NavContent>
    </StyledNav>
  );
}
