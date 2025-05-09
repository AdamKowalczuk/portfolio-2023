import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import HtmlIcon from '../../assets/skills-icons/html-icon.svg';
import CssIcon from '../../assets/skills-icons/css-icon.svg';
import JavaScriptIcon from '../../assets/skills-icons/js-icon.svg';
import ReactIcon from '../../assets/skills-icons/react-icon.svg';
import ReduxIcon from '../../assets/skills-icons/redux-icon.svg';
import SassIcon from '../../assets/skills-icons/sass-icon.svg';
import NodeIcon from '../../assets/skills-icons/nodejs-icon.svg';
import MongoIcon from '../../assets/skills-icons/mongodb-icon.svg';
import GitIcon from '../../assets/skills-icons/git-icon.svg';
import VsCodeIcon from '../../assets/skills-icons/vs-icon.svg';
import FigmaIcon from '../../assets/skills-icons/figma-icon.svg';
import AdobeXDIcon from '../../assets/skills-icons/adobexd-icon.svg';
import TypeScriptIcon from '../../assets/skills-icons/typescript-icon.svg';
import GraphQLIcon from '../../assets/skills-icons/graphql-icon.svg';
import TailwindIcon from '../../assets/skills-icons/tailwind-icon.svg';
import NextIcon from '../../assets/skills-icons/nextjs-icon.svg';
import CypressIcon from '../../assets/skills-icons/cypress-icon.svg';
import ReactTestingLibraryIcon from '../../assets/skills-icons/react-testing-library-icon.svg';
import JestIcon from '../../assets/skills-icons/jest-icon.svg';
import StyledComponentIcon from '../../assets/skills-icons/styled-components-icon.png';
import ChakraUIIcon from '../../assets/skills-icons/chakra-ui-icon.png';
import MaterialUIIcon from '../../assets/skills-icons/material-ui-icon.png';
import PostmanIcon from '../../assets/skills-icons/postman-icon.svg';
import ShadcnUIIcon from '../../assets/skills-icons/shadcn.png';
import CursorUiIcon from '../../assets/skills-icons/cursor-icon.svg';
import TanstackIcon from '../../assets/skills-icons/react-query-icon.svg';
import { motion, useInView } from 'framer-motion';

const SectionHeader = styled.div`
  margin-top: 200px;
  @media only screen and (max-width: 600px) {
    margin-top: 100px;
  }
`;

const SkillsWrapper = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
const SkillsSection = styled.div``;

const SkillsIconsWrapper = styled(motion.div)`
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

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  .icon-bg {
    background: rgba(81, 50, 192, 0.08);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, background 0.2s;
  }
  &:hover .icon-bg {
    background: rgba(81, 50, 192, 0.18);
    box-shadow: 0 4px 16px 0 rgba(81, 50, 192, 0.12);
  }
  img {
    width: 60px;
    height: 60px;
  }
  p {
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    .icon-bg {
      padding: 8px;
    }
    img {
      width: 32px;
      height: 32px;
    }
    p {
      font-size: 12px;
    }
  }
`;

let skills = [
  {
    section: 'Frontend',
    items: [
      {
        name: 'HTML',
        img: HtmlIcon,
      },
      {
        name: 'JavaScript',
        img: JavaScriptIcon,
      },
      {
        name: 'TypeScript',
        img: TypeScriptIcon,
      },
      {
        name: 'React',
        img: ReactIcon,
      },
      {
        name: 'Redux',
        img: ReduxIcon,
      },
      {
        name: 'GraphQL',
        img: GraphQLIcon,
      },
      {
        name: 'Next.js',
        img: NextIcon,
      },
      {
        name: 'TanStack Query',
        img: TanstackIcon,
      },
      
    ],
  },
  {
    section: 'Styling',
    items: [
      {
        name: 'CSS',
        img: CssIcon,
      },
      {
        name: 'SASS',
        img: SassIcon,
      },
      {
        name: 'Tailwind CSS',
        img: TailwindIcon,
      },
      {
        name: 'Chakra UI',
        img: ChakraUIIcon,
      },
      {
        name: 'Material UI',
        img: MaterialUIIcon,
      },
      {
        name: 'Styled Components',
        img: StyledComponentIcon,
      },
      {
        name: 'Shadcn/UI',
        img: ShadcnUIIcon,
      },
    ],
  },
  {
    section: 'Backend',
    items: [
      {
        name: 'Node.js',
        img: NodeIcon,
      },
      {
        name: 'MongoDB',
        img: MongoIcon,
      },
      // {
      //   name: "C#",
      //   img: CsharpIcon,
      // },
    ],
  },
  {
    section: 'Tools',
    items: [
      {
        name: 'Git',
        img: GitIcon,
      },
      {
        name: 'VSCode',
        img: VsCodeIcon,
      },
      {
        name: 'Figma',
        img: FigmaIcon,
      },
      {
        name: 'Adobe XD',
        img: AdobeXDIcon,
      },
      {
        name: 'Postman',
        img: PostmanIcon,
      },
      {
        name: 'Cursor AI',
        img: CursorUiIcon,
      },
    ],
  },
  {
    section: 'Testing',
    items: [
      {
        name: 'Jest',
        img: JestIcon,
      },
      {
        name: 'React Testing Library',
        img: ReactTestingLibraryIcon,
      },
      {
        name: 'Cypress',
        img: CypressIcon,
      },
    ],
  },
];

export default function Skills() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });
  return (
    <>
      <SectionHeader
        ref={ref1}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h4 id="skills">Some technical stuff.</h4>
        <h2>My Skills</h2>
      </SectionHeader>

      <SkillsWrapper>
        {skills.map((skill, id) => {
          return (
            <SkillsSection
              key={id}
              style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              <h3>{skill.section}</h3>
              <SkillsIconsWrapper>
                {skill.items.map((item, id) => {
                  return (
                    <Skill key={id}>
                      <div className="icon-bg">
                        <motion.img
                          src={item.img}
                          alt={item.name}
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        />
                      </div>
                      <p>{item.name} </p>
                    </Skill>
                  );
                })}
              </SkillsIconsWrapper>
            </SkillsSection>
          );
        })}
      </SkillsWrapper>
    </>
  );
}
