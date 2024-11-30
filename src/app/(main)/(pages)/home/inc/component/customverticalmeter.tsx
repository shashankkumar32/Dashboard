import React from 'react';

interface VerticalMeterProps {
  height?: number; // The height of the meter (default to 199px)
}

const VerticalMeter: React.FC<VerticalMeterProps> = ({ height = 199 }) => {
  // Create intervals for each value from 100 to 700 (each representing 100, 200, ..., 700)
  const intervals = [600, 500, 400, 300, 200, 100, 0];

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs mb-2">700</div>
      <div
        className="relative w-7 overflow-hidden "
        style={{
          height: `${height}px`,
          borderRadius: '100px',
        }}
      >
        {/* Render the intervals and their labels */}
        {intervals.map((interval, index) => (
          <div
            key={index}
            className="absolute left-0 w-full"
            style={{
              bottom: `${(interval / 700) * height}px`, // Position the interval based on height
              height: `${height / 7}px`, // Divide the height into 7 equal parts
            }}
          >
            {/* Interval label */}
            <div
              className="absolute text-xs text-center w-full"
              style={{
                bottom: '2px', // Position label inside each interval
              }}
            >
              {interval}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-xs mt-2">{700}</div> */}
    </div>
  );
};

export default VerticalMeter;
