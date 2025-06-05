import React from "react";

export default function OpenSourceProjectsImg({ theme = { text: "#2d3748", imageHighlight: "#4299e1" } }) {
  return (
    <svg
      width="1100"
      height="700"
      viewBox="0 0 1100 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.imageHighlight} stopOpacity="0.1" />
          <stop offset="50%" stopColor={theme.imageHighlight} stopOpacity="0.05" />
          <stop offset="100%" stopColor={theme.imageHighlight} stopOpacity="0.1" />
        </linearGradient>
        
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.imageHighlight} stopOpacity="0.8" />
          <stop offset="100%" stopColor={theme.imageHighlight} stopOpacity="0.4" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="1100" height="700" fill="#fff" />
      
      {/* Network connections */}
      <g stroke={theme.imageHighlight} strokeWidth="2" fill="none" opacity="0.6">
        {/* Main hub connections */}
        <path d="M550 350 Q400 200 250 150" strokeDasharray="5,5" />
        <path d="M550 350 Q700 200 850 150" strokeDasharray="5,5" />
        <path d="M550 350 Q400 500 250 550" strokeDasharray="5,5" />
        <path d="M550 350 Q700 500 850 550" strokeDasharray="5,5" />
        
        {/* Secondary connections */}
        <path d="M250 150 Q150 250 100 350" strokeDasharray="3,3" />
        <path d="M850 150 Q950 250 1000 350" strokeDasharray="3,3" />
        <path d="M250 550 Q150 450 100 350" strokeDasharray="3,3" />
        <path d="M850 550 Q950 450 1000 350" strokeDasharray="3,3" />
        
        {/* Cross connections */}
        <path d="M250 150 Q550 100 850 150" strokeDasharray="4,4" opacity="0.4" />
        <path d="M250 550 Q550 600 850 550" strokeDasharray="4,4" opacity="0.4" />
        <path d="M100 350 Q550 300 1000 350" strokeDasharray="4,4" opacity="0.4" />
      </g>

      {/* Repository nodes */}
      <g>
        {/* Central hub - Main project */}
        <circle cx="550" cy="350" r="60" fill="url(#nodeGradient)" filter="url(#glow)" />
        <circle cx="550" cy="350" r="45" fill="none" stroke={theme.text} strokeWidth="2" />
        
        {/* Git icon in center */}
        <g transform="translate(535, 335)">
          <path d="M15 0L30 8.66L30 17.32L15 26L0 17.32L0 8.66L15 0Z" 
                fill={theme.text} opacity="0.8" />
          <circle cx="15" cy="13" r="3" fill="white" />
        </g>

        {/* Major project nodes */}
        <circle cx="250" cy="150" r="35" fill={theme.imageHighlight} opacity="0.7" />
        <circle cx="850" cy="150" r="35" fill={theme.imageHighlight} opacity="0.7" />
        <circle cx="250" cy="550" r="35" fill={theme.imageHighlight} opacity="0.7" />
        <circle cx="850" cy="550" r="35" fill={theme.imageHighlight} opacity="0.7" />

        {/* Secondary nodes */}
        <circle cx="100" cy="350" r="25" fill={theme.imageHighlight} opacity="0.5" />
        <circle cx="1000" cy="350" r="25" fill={theme.imageHighlight} opacity="0.5" />
        
        {/* Smaller contributor nodes */}
        <circle cx="150" cy="100" r="15" fill={theme.text} opacity="0.6" />
        <circle cx="350" cy="80" r="15" fill={theme.text} opacity="0.6" />
        <circle cx="750" cy="80" r="15" fill={theme.text} opacity="0.6" />
        <circle cx="950" cy="100" r="15" fill={theme.text} opacity="0.6" />
        
        <circle cx="150" cy="600" r="15" fill={theme.text} opacity="0.6" />
        <circle cx="350" cy="620" r="15" fill={theme.text} opacity="0.6" />
        <circle cx="750" cy="620" r="15" fill={theme.text} opacity="0.6" />
        <circle cx="950" cy="600" r="15" fill={theme.text} opacity="0.6" />
      </g>

      {/* Code blocks/Documentation */}
      <g>
        {/* Main documentation block */}
        <rect x="450" y="450" width="200" height="120" rx="10" 
              fill={theme.text} opacity="0.1" />
        <rect x="460" y="460" width="180" height="20" rx="3" 
              fill={theme.imageHighlight} opacity="0.6" />
        <rect x="460" y="490" width="120" height="8" rx="2" 
              fill={theme.text} opacity="0.4" />
        <rect x="460" y="505" width="150" height="8" rx="2" 
              fill={theme.text} opacity="0.4" />
        <rect x="460" y="520" width="100" height="8" rx="2" 
              fill={theme.text} opacity="0.4" />

        {/* Side documentation blocks */}
        <rect x="150" y="200" width="120" height="100" rx="8" 
              fill={theme.text} opacity="0.08" />
        <rect x="830" y="200" width="120" height="100" rx="8" 
              fill={theme.text} opacity="0.08" />
        
        {/* Code snippets */}
        <rect x="50" y="400" width="80" height="60" rx="5" 
              fill={theme.imageHighlight} opacity="0.2" />
        <rect x="970" y="400" width="80" height="60" rx="5" 
              fill={theme.imageHighlight} opacity="0.2" />
      </g>

      {/* Fork symbols */}
      <g fill={theme.text} opacity="0.6">
        <g transform="translate(200, 100)">
          <path d="M0 0 L10 5 L0 10 M0 5 L15 5" strokeWidth="2" stroke={theme.text} fill="none" />
        </g>
        <g transform="translate(900, 100)">
          <path d="M15 0 L5 5 L15 10 M15 5 L0 5" strokeWidth="2" stroke={theme.text} fill="none" />
        </g>
        <g transform="translate(200, 600)">
          <path d="M0 10 L10 5 L0 0 M0 5 L15 5" strokeWidth="2" stroke={theme.text} fill="none" />
        </g>
        <g transform="translate(900, 600)">
          <path d="M15 10 L5 5 L15 0 M15 5 L0 5" strokeWidth="2" stroke={theme.text} fill="none" />
        </g>
      </g>

      {/* Stars and activity indicators */}
      <g fill={theme.imageHighlight} opacity="0.7">
        <polygon points="280,120 285,130 295,130 287,137 290,147 280,142 270,147 273,137 265,130 275,130" />
        <polygon points="880,120 885,130 895,130 887,137 890,147 880,142 870,147 873,137 865,130 875,130" />
        <polygon points="280,520 285,530 295,530 287,537 290,547 280,542 270,547 273,537 265,530 275,530" />
        <polygon points="880,520 885,530 895,530 887,537 890,547 880,542 870,547 873,537 865,530 875,530" />
      </g>

      {/* Collaboration arrows */}
      <g stroke={theme.text} strokeWidth="2" fill={theme.text} opacity="0.5">
        <path d="M300 180 Q400 220 500 180" fill="none" />
        <polygon points="495,175 505,180 495,185" />
        
        <path d="M800 180 Q700 220 600 180" fill="none" />
        <polygon points="605,175 595,180 605,185" />
        
        <path d="M300 520 Q400 480 500 520" fill="none" />
        <polygon points="495,515 505,520 495,525" />
        
        <path d="M800 520 Q700 480 600 520" fill="none" />
        <polygon points="605,515 595,520 605,525" />
      </g>

      {/* Pull request indicators */}
      <g>
        <rect x="350" y="250" width="30" height="20" rx="10" 
              fill={theme.imageHighlight} opacity="0.3" />
        <text x="365" y="263" fontSize="12" fill={theme.text} textAnchor="middle">PR</text>
        
        <rect x="720" y="250" width="30" height="20" rx="10" 
              fill={theme.imageHighlight} opacity="0.3" />
        <text x="735" y="263" fontSize="12" fill={theme.text} textAnchor="middle">PR</text>
      </g>

      {/* Floating particles for activity */}
      <g fill={theme.imageHighlight} opacity="0.4">
        <circle cx="180" cy="80" r="2" />
        <circle cx="320" cy="60" r="2" />
        <circle cx="520" cy="50" r="2" />
        <circle cx="780" cy="60" r="2" />
        <circle cx="920" cy="80" r="2" />
        
        <circle cx="180" cy="620" r="2" />
        <circle cx="320" cy="640" r="2" />
        <circle cx="520" cy="650" r="2" />
        <circle cx="780" cy="640" r="2" />
        <circle cx="920" cy="620" r="2" />
      </g>

      {/* Background geometric pattern */}
      <g stroke={theme.imageHighlight} strokeWidth="1" fill="none" opacity="0.1">
        <polygon points="50,100 100,50 150,100 100,150" />
        <polygon points="950,100 1000,50 1050,100 1000,150" />
        <polygon points="50,600 100,550 150,600 100,650" />
        <polygon points="950,600 1000,550 1050,600 1000,650" />
      </g>
    </svg>
  );
}