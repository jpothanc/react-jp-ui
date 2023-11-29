import React, { useState } from "react";
import "./tooltipStyles.scss";
interface TooltipProps {
  text: string;
  children: React.ReactElement;
}
const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    console.log("handleMouseEnter");
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="jp_tooltip-container">
      <div
        className="jp_tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && <div className="jp_tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;
