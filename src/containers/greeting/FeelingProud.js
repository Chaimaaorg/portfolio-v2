import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    {/* Multiple monitors setup */}
    <rect x="100" y="200" width="250" height="180" fill={theme.text} rx="10"/>
    <rect x="110" y="210" width="230" height="160" fill="#000" rx="5"/>
    
    <rect x="400" y="180" width="300" height="200" fill={theme.text} rx="10"/>
    <rect x="410" y="190" width="280" height="180" fill="#000" rx="5"/>
    
    {/* Charts and graphs */}
    {/* Monitor 1 - Bar chart */}
    <rect x="120" y="230" width="15" height="40" fill={theme.imageHighlight}/>
    <rect x="140" y="220" width="15" height="50" fill={theme.compImgHighlight}/>
    <rect x="160" y="240" width="15" height="30" fill="#4ecdc4"/>
    <rect x="180" y="210" width="15" height="60" fill="#96ceb4"/>
    <rect x="200" y="235" width="15" height="35" fill="#feca57"/>
    
    {/* Monitor 1 - Line graph */}
    <path d="M120 320 L140 310 L160 315 L180 300 L200 295 L220 305 L240 290" 
          stroke={theme.imageHighlight} strokeWidth="3" fill="none"/>
    <path d="M120 330 L140 325 L160 320 L180 315 L200 310 L220 320 L240 315" 
          stroke="#45b7d1" strokeWidth="3" fill="none"/>
    
    {/* Monitor 2 - Complex dashboard */}
    <rect x="420" y="210" width="80" height="50" fill={theme.imageHighlight} opacity="0.3"/>
    <rect x="420" y="215" width="60" height="8" fill={theme.imageHighlight}/>
    <rect x="420" y="230" width="45" height="6" fill={theme.compImgHighlight}/>
    <rect x="420" y="245" width="70" height="6" fill="#4ecdc4"/>
    
    <circle cx="550" cy="240" r="35" fill="none" stroke={theme.imageHighlight} strokeWidth="8"/>
    <circle cx="550" cy="240" r="25" fill={theme.imageHighlight} opacity="0.8"/>
    
    <rect x="600" y="210" width="80" height="40" fill={theme.text}/>
    <rect x="605" y="215" width="15" height="10" fill={theme.compImgHighlight}/>
    <rect x="625" y="215" width="20" height="10" fill="#4ecdc4"/>
    <rect x="650" y="215" width="25" height="10" fill="#96ceb4"/>
    <rect x="605" y="230" width="30" height="10" fill="#feca57"/>
    <rect x="640" y="230" width="35" height="10" fill="#E4405F"/>
    
    {/* Monitor stands */}
    <rect x="200" y="380" width="50" height="30" fill={theme.text}/>
    <rect x="175" y="400" width="100" height="15" fill={theme.text} rx="7"/>
    
    <rect x="525" y="380" width="50" height="30" fill={theme.text}/>
    <rect x="500" y="400" width="100" height="15" fill={theme.text} rx="7"/>
    
    {/* Desk with equipment */}
    <rect x="50" y="410" width="700" height="140" fill={theme.text} rx="10"/>
    <rect x="50" y="410" width="700" height="20" fill={theme.imageHighlight} rx="10"/>
    
    {/* Keyboard and mouse */}
    <rect x="300" y="450" width="200" height="30" fill={theme.text} rx="5"/>
    <ellipse cx="520" cy="465" rx="20" ry="25" fill={theme.text}/>
    
    {/* Data visualization books */}
    <rect x="600" y="430" width="60" height="8" fill={theme.compImgHighlight}/>
    <rect x="605" y="438" width="60" height="8" fill="#4ecdc4"/>
    <rect x="610" y="446" width="60" height="8" fill="#45b7d1"/>
    
    {/* Coffee and notebook */}
    <circle cx="150" cy="460" r="20" fill={theme.imageHighlight}/>
    <rect x="200" y="440" width="80" height="50" fill={theme.text} rx="3"/>
    <rect x="205" y="445" width="70" height="3" fill={theme.imageHighlight}/>
    <rect x="205" y="455" width="50" height="3" fill={theme.imageHighlight}/>
    <rect x="205" y="465" width="60" height="3" fill={theme.imageHighlight}/>
    
    {/* Floating data elements */}
    <circle cx="80" cy="120" r="4" fill={theme.imageHighlight} opacity="0.7"/>
    <rect x="750" y="100" width="8" height="8" fill={theme.compImgHighlight} opacity="0.8"/>
    <circle cx="720" cy="80" r="3" fill="#4ecdc4" opacity="0.6"/>
    <path d="M60 80 L80 60 L100 80 L80 100 Z" fill="#96ceb4" opacity="0.5"/>
  </svg>
    );
  }
}

export default FeelingProud;
