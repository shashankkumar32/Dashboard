import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

// Define the shape of the data we are working with
interface DatasetItem {
  label: string;
  value: number;
  remaining: number;
}

export default function BarClickNoSnap() {
  const [radius, setRadius] = React.useState(100); // Set initial border radius to 100px

  // Define the dataset and processed data types
  const dataset: DatasetItem[] = [
    { value: 100, label: 'Jan', remaining: 700 - 100 },
    { value: 150, label: 'Feb', remaining: 700 - 150 },
    { value: 200, label: 'Mar', remaining: 700 - 200 },
    { value: 250, label: 'Apr', remaining: 700 - 250 },
    { value: 300, label: 'May', remaining: 700 - 300 },
    { value: 350, label: 'Jun', remaining: 700 - 350 },
    { value: 400, label: 'Jul', remaining: 700 - 400 },
    { value: 300, label: 'Aug', remaining: 700 - 300 },
    { value: 500, label: 'Sep', remaining: 700 - 500 },
    { value: 550, label: 'Oct', remaining: 700 - 550 },
    { value: 600, label: 'Nov', remaining: 700 - 600 },
    { value: 650, label: 'Dec', remaining: 700 - 650 },
  ];

  // Set up the chart parameters with dynamic borderRadius
  const barChartsParams = {
    series: [
      {
        id: 'series-1',
        data: dataset.map((data) => data.value),
        label: 'Actual',
        color: '#5382FA',
        stack: 'total',
      },
      {
        id: 'series-2',
        data: dataset.map((data) => data.remaining),
        label: 'Remaining',
        color: '#F2F7FF',
        stack: 'total',
      },
    ],
    xAxis: [
      {
        data: dataset.map((data) => data.label),
        scaleType: 'band' as const,
        id: 'axis1',
        axisLine: { show: false },
        tickLine: { show: false },
      },
    ],
    yAxis: [
      {
        scaleType: 'linear' as const,
        max: 700,
        axisLine: { show: false },
        tickLine: { show: false },
      },
    ],
    height: 400,
  };

  return (
    // <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
     
    //   <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          sx={{
            '.MuiXAxis-root line, .MuiYAxis-root line': {
              display: 'none' // Hide axis lines
            }
         
          }}
          borderRadius={110} // Apply border radius to both ends of the bars
        />
    //   </Box>
    // </Stack>
  );
}
