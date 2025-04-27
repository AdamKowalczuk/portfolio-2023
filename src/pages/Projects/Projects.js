import React, { useRef } from "react";
import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../assets/social-icons/github-icon.svg";
import theme from "../../styles/theme";
import Project1Image from "../../assets/projects-images/project1.png";
import Project2Image from "../../assets/projects-images/project2.png";
import Project3Image from "../../assets/projects-images/project3.png";
import Project4Image from "../../assets/projects-images/project4.png";
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
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const projectsData = [
  {
    title: 'WebFront',
    image: Project1Image,
    alt: 'WebFront project screenshot',
    description: 'This application utilizes MERN stack and JSON Web Token to provide an interactive platform for learning HTML, CSS, and JavaScript.',
    github: 'https://github.com/AdamKowalczuk/praca-inzynierska-client',
    technologies: [
      'React', 'MongoDB', 'Redux', 'Node.js', 'PWA', 'Express.js'
    ],
  },
  {
    title: 'Plan Harmony',
    image: Project2Image,
    alt: 'Plan Harmony project screenshot',
    description: 'An application to create a daily planner, organize tasks and goals, and save notes. An application that allows you to view and analyze your activity.',
    github: 'https://github.com/AdamKowalczuk/plan-harmony',
    technologies: [
      'React', 'Framer motion', 'Redux'
    ],
    reverse: true,
  },
  {
    title: 'Netflix clone',
    image: Project3Image,
    alt: 'Netflix clone project screenshot',
    description: 'A TypeScript, Next.js, and Prisma-powered Netflix clone project that emulates the renowned streaming platform\'s design and features.',
    github: 'https://github.com/AdamKowalczuk/netflix-clone',
    technologies: [
      'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Prisma', 'MongoDB'
    ],
  },
  {
    title: 'Nerd Shop',
    image: Project4Image,
    alt: 'Nerd Shop project screenshot',
    description: 'E-commerce website which offers a diverse range of products and utilizes PayPal for secure and convenient online payments.',
    github: 'https://github.com/AdamKowalczuk/e-commerce-react',
    technologies: [
      'React', 'PayPal sandbox', 'React router'
    ],
    reverse: true,
  },
];

const Project = styled(motion.div)`
  display: flex;
  margin: auto;
  width: 100%;
  gap: 50px;
  justify-content: center;
  // .last-project {
  //   height: 490px;
  // }
  @media only screen and (max-width: 1200px) {
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
    width: 100%;
    gap: 20px;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    // .last-project {
    //   height: calc(100vw - 60px);
    // }
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

const ProjectSummaryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectSummary = styled.div`
  width: 550px;
  height:fit-content;
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

const ProjectTechnologies = styled.div`
  margin: 12px 0 18px 0;
`;

const TechPill = styled.span`
  display: inline-block;
  background: rgba(81, 50, 192, 0.13);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  padding: 4px 12px;
  margin: 0 6px 6px 0;
  border: 1px solid rgba(81, 50, 192, 0.18);
  box-shadow: none;
  letter-spacing: 0.01em;
  transition: background 0.2s, color 0.2s;
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
  const isInView1 = useInView(ref1, { once: true });
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
        {projectsData.map((project, idx) => (
          <Project
            key={project.title}
            reverse={project.reverse}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            {!project.reverse && (
              <ProjectImage image={project.image} aria-label={project.alt} />
            )}
            <ProjectSummaryWrapper>
              <ProjectSummary>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map(tech => (
                    <TechPill key={tech}>{tech}</TechPill>
                  ))}
                </ProjectTechnologies>
                <a target="_blank" rel="noreferrer" href={project.github}>
                  <ProjectButton whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <GithubIcon />
                    View on GitHub
                    <div></div>
                  </ProjectButton>
                </a>
              </ProjectSummary>
            </ProjectSummaryWrapper>
            {project.reverse && (
              <ProjectImage image={project.image} aria-label={project.alt} />
            )}
          </Project>
        ))}
      </ProjectsWrapper>
    </>
  );
}
