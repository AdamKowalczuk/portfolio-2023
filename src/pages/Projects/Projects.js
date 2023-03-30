import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/social-icons/github-icon.svg";
import theme from "../../styles/theme";
import Project1Image from "../../assets/projects-images/project5.png";
import Project2Image from "../../assets/projects-images/project6.png";
import Project3Image from "../../assets/projects-images/project7.png";
import Project4Image from "../../assets/projects-images/project8.png";
import { ReactComponent as Check } from "../../assets/check.svg";
import { motion } from "framer-motion";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media only screen and (max-width: 600px) {
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Project = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  gap: 50px;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    width: 100%;
    gap: 0px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  background-size: contain;
  background-image: url(${(props) => (props.image ? props.image : "#1D1F28")});
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100vw;
  }
`;

const ProjectSummary = styled.div`
  width: 100%;
  background-color: ${theme.colors.darkGray};
  padding: 10px;
  border-radius: 10px;
  padding: 10px 40px;
  @media only screen and (max-width: 600px) {
    width: auto;
    // min-height: 100vw;
    padding: 10px 40px 20px 40px;
  }
`;

const ProjectTitle = styled.h4`
  text-align: left;
`;

const ProjectDescription = styled.p`
  font-size: 24px;
  color: ${theme.colors.white};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectTechnologies = styled.div``;

const ProjectLine = styled.div`
  border-bottom: 2px solid rgb(255, 255, 255, 0.1);
  padding: 10px 0;
  display: flex;
`;

const ProjectTech = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${theme.colors.white};
  width: 50%;
  @media only screen and (max-width: 600px) {
    p {
      font-size: 12px;
    }
  }
`;

const Checkbox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background: rgb(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width: 18px;
    height: 18px;
    svg {
      width: 12px;
    }
  }
`;

const ProjectButton = styled(motion.div)`
  background: ${theme.colors.purple};
  border-radius: 10px;
  width: 250px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-evenly;
  color: ${theme.colors.white};
  margin: auto;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover {
    color: ${theme.colors.purple};
    background: ${theme.colors.white};
    path {
      fill: ${theme.colors.purple};
    }
  }
  path {
    fill: ${theme.colors.white};
    fill-opacity: 1;
  }
  @media only screen and (max-width: 600px) {
    width: auto;
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 12px;
  }
`;

export default class Projects extends Component {
  render() {
    return (
      <>
        <h4 id="projects">Now, the good stuff.</h4>
        <h2>My Work</h2>
        <ProjectsWrapper>
          <Project>
            <ProjectImage image={Project1Image}></ProjectImage>
            <ProjectSummary>
              <ProjectTitle>WebFront</ProjectTitle>
              <ProjectDescription>
                This application utilizes MERN stack and JSON Web Token to provide an interactive platform for learning HTML, CSS, and JavaScript.
              </ProjectDescription>
              <ProjectTechnologies>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>React</p>
                  </ProjectTech>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>MongoDB</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Redux</p>
                  </ProjectTech>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Node.js</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine style={{ borderBottom: 0 }}>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>PWA</p>
                  </ProjectTech>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Express.js</p>
                  </ProjectTech>
                </ProjectLine>
              </ProjectTechnologies>
              <a target="_blank" rel="noreferrer" href="https://github.com/AdamKowalczuk/praca-inzynierska-client">
                <ProjectButton whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <GithubIcon />
                  Go to github
                  <div></div>
                </ProjectButton>
              </a>
            </ProjectSummary>
          </Project>
          <Project reverse={true}>
            <ProjectSummary>
              <ProjectTitle>Plan Harmony</ProjectTitle>
              <ProjectDescription>
                An application to create a daily planner, organize tasks and goals, and save notes. An application that allows you to view and analyze
                your activity.
              </ProjectDescription>
              <ProjectTechnologies>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>React</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Framer motion</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine style={{ borderBottom: 0 }}>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Redux</p>
                  </ProjectTech>
                </ProjectLine>
              </ProjectTechnologies>
              <a target="_blank" rel="noreferrer" href="https://github.com/AdamKowalczuk/plan-harmony">
                <ProjectButton whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <GithubIcon />
                  Go to github
                  <div></div>
                </ProjectButton>
              </a>
            </ProjectSummary>
            <ProjectImage image={Project2Image}></ProjectImage>
          </Project>
          <Project>
            <ProjectImage image={Project3Image}></ProjectImage>
            <ProjectSummary>
              <ProjectTitle>BMI - calculator</ProjectTitle>
              <ProjectDescription>Calculator for calculating body mass index built in TypeScript and with the help of Webpack</ProjectDescription>
              <ProjectTechnologies>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>React</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Typescript</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine style={{ borderBottom: 0 }}>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>Webpack</p>
                  </ProjectTech>
                </ProjectLine>
              </ProjectTechnologies>
              <a target="_blank" rel="noreferrer" href="https://github.com/AdamKowalczuk/bmi-calculator-typescript-webpack">
                <ProjectButton whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <GithubIcon />
                  Go to github
                  <div></div>
                </ProjectButton>
              </a>
            </ProjectSummary>
          </Project>
          <Project reverse={true}>
            <ProjectSummary>
              <ProjectTitle>Nerd Shop</ProjectTitle>
              <ProjectDescription>
                E-commerce website which offers a diverse range of products and utilizes PayPal for secure and convenient online payments.
              </ProjectDescription>
              <ProjectTechnologies>
                <ProjectLine>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>React</p>
                  </ProjectTech>
                </ProjectLine>
                <ProjectLine style={{ borderBottom: 0 }}>
                  <ProjectTech>
                    <Checkbox>
                      <Check />
                    </Checkbox>
                    <p>PayPal sandbox</p>
                  </ProjectTech>
                </ProjectLine>
              </ProjectTechnologies>
              <a target="_blank" rel="noreferrer" href="https://github.com/AdamKowalczuk/e-commerce-react">
                <ProjectButton whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <GithubIcon />
                  Go to github
                  <div></div>
                </ProjectButton>
              </a>
            </ProjectSummary>
            <ProjectImage image={Project4Image}></ProjectImage>
          </Project>
        </ProjectsWrapper>
      </>
    );
  }
}
