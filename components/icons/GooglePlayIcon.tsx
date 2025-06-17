import React from "react";

export const GooglePlayIcon = ({ className = "h-5 w-5 mr-2" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00A0FF" />
        <stop offset="0.5" stopColor="#00A0FF" />
        <stop offset="1" stopColor="#00A0FF" />
      </linearGradient>
      <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00A0FF" />
        <stop offset="1" stopColor="#00A0FF" />
      </linearGradient>
      <linearGradient id="gp3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB900" />
        <stop offset="1" stopColor="#F7971E" />
      </linearGradient>
      <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3A44" />
        <stop offset="1" stopColor="#C31162" />
      </linearGradient>
      <linearGradient id="gp5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#32A071" />
        <stop offset="1" stopColor="#009B58" />
      </linearGradient>
    </defs>
    <polygon fill="url(#gp1)" points="47,3 304,256 47,509" />
    <polygon fill="url(#gp3)" points="47,3 441,188 304,256" />
    <polygon fill="url(#gp4)" points="304,256 441,324 47,509" />
    <polygon fill="url(#gp5)" points="441,188 441,324 304,256" />
  </svg>
);

export default GooglePlayIcon;
