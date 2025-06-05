import React, { Component } from "react";

export default class BigDataImg extends Component {
  render() {
    const theme = this.props.theme || {
      text: "#2c3e50",
      compImgHighlight: "#ecf0f1",
      imageHighlight: "#3498db",
      jacketColor: "#e74c3c",
      dark: "#34495e"
    };
    
    return (
      <svg
        id="bigdata-skills-svg"
        data-name="Big Data Skills"
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="600"
        viewBox="0 0 1000 600"
      >
        <title>Big Data Skills</title>
        
        {/* Background Elements */}
        <ellipse
          cx="850"
          cy="580"
          rx="120"
          ry="15"
          fill={theme.text}
          opacity="0.1"
        />
        
        {/* Main Dashboard/Screen */}
        <rect
          x="50"
          y="50"
          width="400"
          height="280"
          fill={theme.compImgHighlight}
          rx="10"
        />
        <rect
          x="60"
          y="40"
          width="400"
          height="280"
          fill="none"
          stroke={theme.text}
          strokeWidth="3"
          rx="10"
        />
        
        {/* Data Visualization Charts */}
        {/* Bar Chart */}
        <rect x="80" y="200" width="30" height="80" fill={theme.imageHighlight} />
        <rect x="120" y="150" width="30" height="130" fill={theme.jacketColor} />
        <rect x="160" y="180" width="30" height="100" fill={theme.text} />
        <rect x="200" y="120" width="30" height="160" fill={theme.imageHighlight} />
        
        {/* Pie Chart */}
        <g transform="translate(320, 180)">
          <circle cx="0" cy="0" r="60" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" />
          <path d="M 0,-60 A 60,60 0 0,1 42.43,42.43 L 0,0 Z" fill={theme.imageHighlight} />
          <path d="M 42.43,42.43 A 60,60 0 0,1 -42.43,42.43 L 0,0 Z" fill={theme.jacketColor} />
          <path d="M -42.43,42.43 A 60,60 0 0,1 0,-60 L 0,0 Z" fill={theme.text} />
        </g>
        
        {/* Data Flow Lines */}
        <polyline
          points="80,300 200,350 350,320 450,340"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeDasharray="5,5"
        />
        
        {/* Database Icons */}
        <g transform="translate(500, 80)">
          <ellipse cx="0" cy="0" rx="40" ry="15" fill={theme.imageHighlight} />
          <rect x="-40" y="0" width="80" height="60" fill={theme.imageHighlight} />
          <ellipse cx="0" cy="60" rx="40" ry="15" fill={theme.jacketColor} />
          <ellipse cx="0" cy="20" rx="40" ry="15" fill={theme.text} opacity="0.3" />
          <ellipse cx="0" cy="40" rx="40" ry="15" fill={theme.text} opacity="0.3" />
        </g>
        
        {/* Cloud Storage */}
        <g transform="translate(600, 200)">
          <ellipse cx="-20" cy="10" rx="25" ry="20" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" />
          <ellipse cx="20" cy="10" rx="25" ry="20" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" />
          <ellipse cx="0" cy="-5" rx="30" ry="22" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" />
          <rect x="-45" y="10" width="90" height="20" fill={theme.compImgHighlight} />
        </g>
        
        {/* Machine Learning Brain */}
        <g transform="translate(750, 150)">
          <ellipse cx="0" cy="0" rx="60" ry="45" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" />
          {/* Neural Network Nodes */}
          <circle cx="-30" cy="-15" r="8" fill={theme.imageHighlight} />
          <circle cx="-30" cy="15" r="8" fill={theme.imageHighlight} />
          <circle cx="0" cy="-20" r="8" fill={theme.jacketColor} />
          <circle cx="0" cy="0" r="8" fill={theme.jacketColor} />
          <circle cx="0" cy="20" r="8" fill={theme.jacketColor} />
          <circle cx="30" cy="-10" r="8" fill={theme.text} />
          <circle cx="30" cy="10" r="8" fill={theme.text} />
          
          {/* Neural Network Connections */}
          <line x1="-22" y1="-15" x2="-8" y2="-20" stroke={theme.dark} strokeWidth="1" />
          <line x1="-22" y1="-15" x2="-8" y2="0" stroke={theme.dark} strokeWidth="1" />
          <line x1="-22" y1="15" x2="-8" y2="0" stroke={theme.dark} strokeWidth="1" />
          <line x1="-22" y1="15" x2="-8" y2="20" stroke={theme.dark} strokeWidth="1" />
          <line x1="8" y1="-20" x2="22" y2="-10" stroke={theme.dark} strokeWidth="1" />
          <line x1="8" y1="0" x2="22" y2="-10" stroke={theme.dark} strokeWidth="1" />
          <line x1="8" y1="0" x2="22" y2="10" stroke={theme.dark} strokeWidth="1" />
          <line x1="8" y1="20" x2="22" y2="10" stroke={theme.dark} strokeWidth="1" />
        </g>
        
        {/* Programming Languages/Tools */}
        <g transform="translate(100, 400)">
          <rect x="0" y="0" width="80" height="50" fill={theme.imageHighlight} rx="5" />
          <text x="40" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Python</text>
        </g>
        
        <g transform="translate(200, 400)">
          <rect x="0" y="0" width="80" height="50" fill={theme.jacketColor} rx="5" />
          <text x="40" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Spark</text>
        </g>
        
        <g transform="translate(300, 400)">
          <rect x="0" y="0" width="80" height="50" fill={theme.text} rx="5" />
          <text x="40" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Hadoop</text>
        </g>
        
        <g transform="translate(400, 400)">
          <rect x="0" y="0" width="80" height="50" fill={theme.dark} rx="5" />
          <text x="40" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SQL</text>
        </g>
        
        {/* Data Stream Visualization */}
        <g transform="translate(550, 350)">
          {/* Data particles flowing */}
          <circle cx="0" cy="0" r="4" fill={theme.imageHighlight} />
          <circle cx="20" cy="-5" r="3" fill={theme.jacketColor} />
          <circle cx="40" cy="3" r="4" fill={theme.text} />
          <circle cx="60" cy="-2" r="3" fill={theme.imageHighlight} />
          <circle cx="80" cy="4" r="4" fill={theme.jacketColor} />
          <circle cx="100" cy="-3" r="3" fill={theme.text} />
          
          {/* Flow lines */}
          <path
            d="M 0,0 Q 50,-10 100,0"
            fill="none"
            stroke={theme.dark}
            strokeWidth="2"
            opacity="0.3"
          />
        </g>
        
        {/* Analytics Dashboard */}
        <g transform="translate(650, 400)">
          <rect x="0" y="0" width="200" height="120" fill={theme.compImgHighlight} stroke={theme.text} strokeWidth="2" rx="8" />
          
          {/* Mini charts inside dashboard */}
          <rect x="10" y="30" width="60" height="35" fill={theme.imageHighlight} opacity="0.7" />
          <rect x="80" y="30" width="60" height="35" fill={theme.jacketColor} opacity="0.7" />
          <rect x="150" y="30" width="40" height="35" fill={theme.text} opacity="0.7" />
          
          {/* Dashboard metrics */}
          <circle cx="30" cy="85" r="12" fill={theme.imageHighlight} />
          <circle cx="70" cy="85" r="12" fill={theme.jacketColor} />
          <circle cx="110" cy="85" r="12" fill={theme.text} />
          <circle cx="150" cy="85" r="12" fill={theme.dark} />
          
          <text x="100" y="15" textAnchor="middle" fill={theme.text} fontSize="10" fontWeight="bold">ANALYTICS</text>
        </g>
        
        {/* Connecting arrows and data flow */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={theme.text} />
          </marker>
        </defs>
        
        <line x1="460" y1="200" x2="540" y2="200" 
              stroke={theme.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="640" y1="230" x2="690" y2="280" 
              stroke={theme.text} strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Skill Legend */}
        <g transform="translate(50, 500)">
          <rect x="0" y="0" width="15" height="15" fill={theme.imageHighlight} />
          <text x="25" y="12" fill={theme.text} fontSize="12">Data Processing</text>
          
          <rect x="150" y="0" width="15" height="15" fill={theme.jacketColor} />
          <text x="175" y="12" fill={theme.text} fontSize="12">Machine Learning</text>
          
          <rect x="300" y="0" width="15" height="15" fill={theme.text} />
          <text x="325" y="12" fill={theme.text} fontSize="12">Data Storage</text>
          
          <rect x="450" y="0" width="15" height="15" fill={theme.dark} />
          <text x="475" y="12" fill={theme.text} fontSize="12">Analytics</text>
        </g>
      </svg>
    );
  }
}