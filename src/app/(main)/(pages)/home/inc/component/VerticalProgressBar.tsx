import React from "react";

interface VerticalProgressBarProps {
  value: number; // The value to fill the progress bar
  max: number; // The maximum value of the progress bar
  height?: number; // The height of the progress bar
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  value,
  max,
  height = 199,
}) => {
  const fillPercentage = (value / max) * 100;

  return (
    <div
      className="relative w-3 bg-white rounded-full overflow-hidden border"
      style={{
        height: `${height}px`,
        borderRadius: "100px",
        border: "1px solid #E5E5E5",
      }}
    >
      {/* Filled section */}
      <div
        className="absolute bottom-0 left-0 w-full rounded-full bg-black"
        style={{
          height: `${fillPercentage}%`,
        }}
      />
    </div>
  );
};
export default VerticalProgressBar
// export default function App() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <VerticalProgressBar value={150} max={700} />
//     </div>
//   );
// }
