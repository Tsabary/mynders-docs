import React from "react";

export const generateBackgroundPattern = (
  bgColor: string | undefined = "#fff",
  dotsColor: string | undefined = "#A8A29E"
): React.CSSProperties => {
  return {
    backgroundColor: bgColor,
    backgroundImage: `radial-gradient(${dotsColor} 0.6px, transparent 0.8px)`,
    backgroundSize: "10px 10px",
  };
};
