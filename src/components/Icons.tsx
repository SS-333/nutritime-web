import React from 'react';

// Refined Full Logo Component
export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 320 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        .font-logo { font-family: 'Fredoka', sans-serif; font-weight: 700; }
        .font-slogan { font-family: 'Inter', sans-serif; font-weight: 600; letter-spacing: 0.5px; }
      `}
    </style>

    {/* Background Arc - Partial Green Circle */}
    <path
      d="M 40 135 A 115 115 0 0 1 280 60"
      stroke="#9ec668"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* NU (Teal) */}
    <text x="25" y="85" className="font-logo" fontSize="64" fill="#7bc9c6">
      NU
    </text>

    {/* Central Orange Structure (The 'T' that connects everything) */}
    {/* T Top Bar */}
    <line
      x1="110"
      y1="35"
      x2="150"
      y2="35"
      stroke="#eb8a65"
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* T Stem curving into U shape for TIME */}
    <path
      d="M 130 35 V 105 Q 130 145 170 145"
      stroke="#eb8a65"
      strokeWidth="14"
      strokeLinecap="round"
      fill="none"
    />

    {/* RI (Teal) */}
    <text x="175" y="85" className="font-logo" fontSize="64" fill="#7bc9c6">
      RI
    </text>

    {/* IME (Teal) - Aligned with the bottom curve of the T */}
    <text x="175" y="145" className="font-logo" fontSize="64" fill="#7bc9c6">
      IME
    </text>

    {/* Sunburst Rays (Orange) */}
    <g stroke="#eb8a65" strokeWidth="5" strokeLinecap="round">
      <line x1="130" y1="20" x2="130" y2="5" />
      <line x1="105" y1="25" x2="95" y2="12" />
      <line x1="155" y1="25" x2="165" y2="12" />
    </g>

    {/* Leaves (Green) - Sprouting from RI */}
    <g transform="translate(245, 55) rotate(15)">
      <path d="M0 0 Q 15 -20 35 0 Q 15 20 0 0 Z" fill="#9ec668" />
      <path d="M0 0 Q -5 25 20 30 Q 25 5 0 0 Z" fill="#9ec668" />
      <path d="M0 0 L 25 0" stroke="white" strokeWidth="2" opacity="0.5" />
    </g>

    {/* Slogan (Stacked on Left) */}
    <text x="35" y="125" className="font-slogan" fontSize="13" fill="#eb8a65">
      salud +
    </text>
    <text x="20" y="145" className="font-slogan" fontSize="13" fill="#eb8a65">
      alimentación
    </text>
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const DumbbellIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
