import React from 'react';

interface VerticalMeterProps {
  height?: number; 
}

const VerticalMeter: React.FC<VerticalMeterProps> = ({ height = 199 }) => {
  const intervals = [600, 500, 400, 300, 200, 100, 0];
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs mb-2">700</div>
      <div
        className="relative text-xs w-5 overflow-hidden "
        style={{
          height: `${height}px`,
          borderRadius: '100px',
        }}
      >
        {intervals.map((interval, index) => (
          <div
            key={index}
            className="absolute left-0 w-full"
            style={{
              bottom: `${(interval / 700) * height}px`, 
              height: `${height / 7}px`,
            }}
          >
            <div
              className="absolute text-xs text-center w-full"
              style={{
                bottom: '2px', 
              }}
            >
              {interval}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalMeter;
