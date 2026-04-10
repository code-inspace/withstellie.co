import React from 'react';

interface WaveDividerProps {
  /** Background behind the SVG (outgoing section color) */
  bgColor: string;
  /** Fill color of the wave shape (incoming section color) */
  fillColor: string;
  /** Flip vertically for bottom-of-section use */
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ bgColor, fillColor, flip = false }) => (
  <div
    style={{ backgroundColor: bgColor, marginBottom: -1 }}
    className="w-full overflow-hidden leading-none"
  >
    <svg
      viewBox="0 0 1440 90"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}
    >
      <path
        d="M0,30 C200,90 400,0 600,45 C800,90 1000,10 1200,50 C1310,72 1380,30 1440,20 L1440,90 L0,90 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);
