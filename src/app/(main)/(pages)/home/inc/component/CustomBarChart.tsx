import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerticalProgressBar from './VerticalProgressBar';
import VerticalMeter from './customverticalmeter';

interface DatasetItem {
  month: string;
  value: number;
}

export default function BarClickNoSnap() {
  const [dataset, setDataset] = React.useState<DatasetItem[]>([]);
  
  // Fetch data from the JSON file
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch JSON data from the file
        const response = await fetch('/data.json');
        const data = await response.json();
        
        // Extract monthly activity data
        const activityData = data.activity.monthly;
        setDataset(activityData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  return (
    <Box sx={{ width: '100%', justifyContent: 'center', display: "flex", my: 1, mt: 2 }}>
      <Stack direction="row" spacing={1.5} sx={{ width: '100%', justifyContent: 'center' }}>
        <VerticalMeter />
        {dataset.map((data) => (
          <Box key={data.month} sx={{ textAlign: 'center', display: "flex" }}>
            <Stack>
              <VerticalProgressBar value={data.value} max={700} />
              <Typography variant="body2">{data.month}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
