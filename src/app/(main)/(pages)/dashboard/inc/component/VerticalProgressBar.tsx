import React from "react";

interface VerticalProgressBarProps {
  value: number; 
  max: number; 
  height?: number; 
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  value,
  max,
  height = 199,
}) => {
  const fillPercentage = (value / max) * 100;

  return (
    <div
      className="relative xs:w-0.9 sm:w-2 lg:w-3 rounded-full overflow-hidden border"
      style={{
        height: `${height}px`,
        borderRadius: "100px",
        background:" #F2F7FF"
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full rounded-full "
        style={{
          height: `${fillPercentage}%`,
          background: "linear-gradient(356.64deg, rgba(27, 89, 248, 0.8) 48.49%, rgba(27, 89, 248, 0) 282.14%)"

        }}
      />
    </div>
  );
};
export default VerticalProgressBar

