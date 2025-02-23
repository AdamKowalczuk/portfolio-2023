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
  @media only screen and (max-width: 600px) {
    text-align: center;
    align-items: center;
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
    height: 500px;
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
            <h4>Welcome to my portfolio!</h4>
            <h1>I’m Adam, a React Frontend Developer</h1>
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
          As a <b>frontend developer</b> specializing in <b>React</b> and{' '}
          <b>Next.js</b>, I focus on building visually appealing and highly
          interactive <b>user interfaces</b> for web applications. My{' '}
          <b>passion for coding</b> goes hand in hand with my attention to
          detail, ensuring every project is <b>responsive</b> and{' '}
          <b>user-friendly</b>. Outside of development, I enjoy <b>running</b>,{' '}
          <b>reading</b>, and exploring new <b>board games</b>. My{' '}
          <b>portfolio</b> highlights my expertise in <b>React</b>, showcasing
          projects that prioritize seamless design and intuitive{' '}
          <b>user experiences</b>. When I'm not <b>coding</b>, you can find me
          on a morning jog, immersed in a great book, or strategizing over a
          board game. Feel free to explore my <b>portfolio</b> and{' '}
          <b>get in touch</b> if you'd like to know more.
        </p>
      </AboutDescription>
    </>
  );
  // }
}
