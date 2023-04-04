import React, { Component, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/social-icons/github-icon.svg";
import theme from "../../styles/theme";
import Project1Image from "../../assets/projects-images/project1.png";
import Project2Image from "../../assets/projects-images/project2.png";
import Project3Image from "../../assets/projects-images/project3.png";
import Project4Image from "../../assets/projects-images/project4.png";
import { ReactComponent as Check } from "../../assets/check.svg";
import { motion, useInView } from "framer-motion";

const SectionHeader = styled.div`
  margin-top: 200px;
  @media only screen and (max-width: 600px) {
    margin-top: 100px;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media only screen and (max-width: 1200px) {
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Project = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  gap: 50px;
  justify-content: center;
  .last-project {
    height: 490px;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    width: 100%;
    gap: 20px;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    .last-project {
      height: calc(100vw - 40px);
    }
    .last-project-text {
      height: auto;
    }
  }
`;

const ProjectImage = styled.div`
  height: 550px;
  width: 550px;
  background-size: cover;
  background-image: url(${(props) => (props.image ? props.image : "#1D1F28")});
  background-repeat: no-repeat;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: calc(100vw - 40px);
    background-size: cover;
  }
`;

const ProjectSummary = styled.div`
  width: 550px;
  height: 550px;
  background-color: rgb(29, 31, 40);
  padding: 0px 40px;
  box-sizing: border-box;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: auto;
    padding: 10px 40px 20px 40px;
    height: auto;
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

export default function Projects() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });
  const isInView7 = useInView(ref7, { once: true });
  const isInView8 = useInView(ref8, { once: true });
  const isInView9 = useInView(ref9, { once: true });
  return (
    <>
      <SectionHeader
        id="projects"
        ref={ref1}
        style={{
          transform: isInView1 ? "none" : "translateX(-200px)",
          opacity: isInView1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h4>Now, the good stuff.</h4>
        <h2>My Work</h2>
      </SectionHeader>
      <ProjectsWrapper>
        <Project>
          <ProjectImage
            ref={ref2}
            style={{
              transform: isInView2 ? "none" : "translateX(-200px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            image={Project1Image}
          ></ProjectImage>
          <ProjectSummary
            ref={ref3}
            style={{
              transform: isInView3 ? "none" : "translateX(-200px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
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
          <ProjectSummary
            ref={ref4}
            style={{
              transform: isInView4 ? "none" : "translateX(200px)",
              opacity: isInView4 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
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
          <ProjectImage
            ref={ref5}
            style={{
              transform: isInView5 ? "none" : "translateX(200px)",
              opacity: isInView5 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            image={Project2Image}
          ></ProjectImage>
        </Project>
        <Project>
          <ProjectImage
            ref={ref6}
            style={{
              transform: isInView6 ? "none" : "translateX(-200px)",
              opacity: isInView6 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            image={Project3Image}
          ></ProjectImage>
          <ProjectSummary
            ref={ref7}
            style={{
              transform: isInView7 ? "none" : "translateX(-200px)",
              opacity: isInView7 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
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
          <ProjectSummary
            ref={ref8}
            style={{
              transform: isInView8 ? "none" : "translateX(200px)",
              opacity: isInView8 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="last-project last-project-text"
          >
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
          <ProjectImage
            ref={ref9}
            style={{
              transform: isInView9 ? "none" : "translateX(200px)",
              opacity: isInView9 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="last-project"
            image={Project4Image}
          ></ProjectImage>
        </Project>
      </ProjectsWrapper>
    </>
  );
}
