import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Avatar from '../../assets/avatar.png';
import { useInView } from 'framer-motion';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  gap: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 0px;
    text-align: center;
  }
`;

const AboutBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const AboutWelcome = styled.div`
  max-width: 500px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  h1 {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
    gap: 18px;
    h1 {
      font-size: 32px;
    }
  }
`;

const AboutDescription = styled.div`
  background: linear-gradient(180deg, rgba(81, 50, 192, 0.5) 0%, #5132c0 100%);
  border-radius: 12px;
  width: auto;
  margin: auto;
  padding: 50px;
  margin-top: 100px;
  margin-bottom: 50px;
  
  h3 {
    margin-top: 0;
  }
  p {
    color: ${theme.colors.gray};
    font-size: 18px;
    b {
      color: ${theme.colors.white};
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 1000px) {
    width: auto;
    padding: 20px;
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 600px) {
    margin: 30px 0;
  }
`;

const AboutAvatar = styled.div`
  margin: auto;
  img {
    width: 100%;
    background-size: contain;
    height: 400px;
    border-radius: 8px;
    margin-left: -50px;
  }
  @media only screen and (max-width: 1000px) {
    img {
      height: auto;
      margin-left: 0px;
    }
  }
`;

const Badge = styled.div`
  background: #2d1856;
  color: #e0d7ff;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  
`;

const Highlight = styled.span`
  color: ${theme.colors.purple};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 0;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    gap: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
`;

const PrimaryButton = styled.a`
  background: ${theme.colors.purple};
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  transition: background 0.2s;
  box-shadow: 0 2px 16px 0 rgba(81,50,192,0.15);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${theme.colors.purple};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.purple};
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
    min-width: 0;
    justify-content: center;
  }
`;

const SecondaryButton = styled.a`
  background: ${theme.colors.darkGray};
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  border: 1px solid #333;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: ${theme.colors.gray};
    color: ${theme.colors.darkGray};
  }
  @media only screen and (max-width: 600px) {
    flex: 1;
    min-width: 0;
    justify-content: center;
  }
`;

const AboutDescriptionShort = styled.p`
  color: ${theme.colors.gray};
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: left;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const scrollIntoView = (item) => {
  let element = document.getElementById(item);
  const yOffset = -90;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function About() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <>
      <AboutWrapper ref={ref1}>
        <AboutBox>
          <AboutWelcome
            style={{
              transform: isInView1 ? 'none' : 'translateX(-200px)',
              opacity: isInView1 ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Badge>Frontend Developer</Badge>
            <h1>Hi, I am <Highlight>Adam</Highlight></h1>
            <AboutDescriptionShort>
              I create modern, intuitive and responsive web interfaces using React and Next.js.
            </AboutDescriptionShort>
            <ButtonRow>
              <PrimaryButton as="button" onClick={() => scrollIntoView("projects")}>See projects</PrimaryButton>
              <SecondaryButton href="/CV.pdf" target="_blank" rel="noopener noreferrer">Download CV</SecondaryButton>
            </ButtonRow>
          </AboutWelcome>
        </AboutBox>

        <AboutAvatar
          style={{
            transform: isInView1 ? 'none' : 'translateX(-200px)',
            opacity: isInView1 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <img
            src={Avatar}
            alt="Avatar representing Adam, a React Frontend Developer"
          />
        </AboutAvatar>
      </AboutWrapper>
      <AboutDescription
        ref={ref2}
        style={{
          transform: isInView2 ? 'none' : 'translateX(-200px)',
          opacity: isInView2 ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h3>Something about me</h3>
        <p>
          I am a passionate <b>frontend developer</b> with 3 years of experience, specializing in <b>React</b> and <b>Next.js</b>. I create modern, intuitive and fully responsive <b>web interfaces</b> that focus on user experience and aesthetics. I pay great attention to detail and always strive for clean, maintainable code.<br /><br />
          Outside of programming, I enjoy <b>running</b>, <b>reading</b> and discovering new <b>board games</b>.<br /><br />
          Feel free to check out my <b>portfolio</b> and contact me if you want to collaborate or just say hi!
        </p>
      </AboutDescription>
    </>
  );
  // }
}
