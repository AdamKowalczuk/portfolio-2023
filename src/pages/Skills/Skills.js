import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import HtmlIcon from "../../assets/skills-icons/html-icon.svg";
import CssIcon from "../../assets/skills-icons/css-icon.svg";
import JavaScriptIcon from "../../assets/skills-icons/js-icon.svg";
import ReactIcon from "../../assets/skills-icons/react-icon.svg";
import ReduxIcon from "../../assets/skills-icons/redux-icon.svg";
import SassIcon from "../../assets/skills-icons/sass-icon.svg";
import NodeIcon from "../../assets/skills-icons/nodejs-icon.svg";
import MongoIcon from "../../assets/skills-icons/mongodb-icon.svg";
import GitIcon from "../../assets/skills-icons/git-icon.svg";
import VsCodeIcon from "../../assets/skills-icons/vs-icon.svg";
import FigmaIcon from "../../assets/skills-icons/figma-icon.svg";
import AdobeXDIcon from "../../assets/skills-icons/adobexd-icon.svg";
import GatsbyIcon from "../../assets/skills-icons/gatsby-icon.svg";
import PwaIcon from "../../assets/skills-icons/pwa-icon.svg";
import { motion } from "framer-motion";

const SkillsWrapper = styled.div`
  padding: 50px;
  h3 {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const SkillsIconsWrapper = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    display: flex;
    gap: 20px;
    padding: 10px 0;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 700;
  }
  @media only screen and (max-width: 600px) {
    p {
      font-size: 10px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

let skills = [
  {
    section: "Frontend",
    items: [
      {
        name: "HTML",
        img: HtmlIcon,
      },
      {
        name: "CSS",
        img: CssIcon,
      },
      {
        name: "JavaScript",
        img: JavaScriptIcon,
      },
      {
        name: "React",
        img: ReactIcon,
      },
      {
        name: "Redux",
        img: ReduxIcon,
      },
      {
        name: "SASS",
        img: SassIcon,
      },
    ],
  },
  {
    section: "Backend",
    items: [
      {
        name: "Node.js",
        img: NodeIcon,
      },
      {
        name: "MongoDB",
        img: MongoIcon,
      },
    ],
  },
  {
    section: "Tools",
    items: [
      {
        name: "Git",
        img: GitIcon,
      },
      {
        name: "VSCode",
        img: VsCodeIcon,
      },
      {
        name: "Figma",
        img: FigmaIcon,
      },
      {
        name: "Adobe XD",
        img: AdobeXDIcon,
      },
    ],
  },
  {
    section: "Other",
    items: [
      {
        name: "Gatsby",
        img: GatsbyIcon,
      },
      {
        name: "PWA",
        img: PwaIcon,
      },
    ],
  },
];

export default class Skills extends Component {
  render() {
    return (
      <>
        <h4 id="skills">Some technical stuff.</h4>
        <h2>My Skills</h2>
        <SkillsWrapper>
          {skills.map((skill) => {
            return (
              <>
                <h3>{skill.section}</h3>
                <SkillsIconsWrapper>
                  {skill.items.map((item) => {
                    return (
                      <>
                        <Skill>
                          <motion.img
                            src={item.img}
                            alt={item.name}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          />
                          <p>{item.name} </p>
                        </Skill>
                      </>
                    );
                  })}
                </SkillsIconsWrapper>
              </>
            );
          })}
        </SkillsWrapper>
      </>
    );
  }
}
