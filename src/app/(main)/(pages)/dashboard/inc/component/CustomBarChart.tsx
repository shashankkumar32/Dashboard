import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VerticalProgressBar from './VerticalProgressBar';
import VerticalMeter from './customverticalmeter';
import { Skeleton } from '@mui/material';  

interface DatasetItem {
  month: string;
  value: number;
}

export default function BarClickNoSnap() {
  const [dataset, setDataset] = React.useState<DatasetItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true); 

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const activityData = data.activity.monthly;
        setDataset(activityData);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  return (
    <Box sx={{ width: '100%', justifyContent: 'center', display: "flex", my: 1, mt: 2 }}>
      <Stack direction="row" spacing={{ sm: 1.5, xs: 1 }} sx={{ width: '100%', justifyContent: 'center' }}>

        {!loading && <VerticalMeter />}
        
        {loading ? (
    
         
            <Box  sx={{ textAlign: 'center', display: "flex" }}>
              <Stack>
                <Skeleton variant="circular" width={200} height={200} sx={{ mb: 1 }} />
             
              </Stack>
            </Box>
          
        ) : (
      
          dataset.map((data) => (
            <Box key={data.month} sx={{ textAlign: 'center', display: "flex" }}>
              <Stack>
                <VerticalProgressBar value={data.value} max={700} />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '9px', lg: '14px' },
                    lineHeight: '10.89px',
                    textAlign: 'center',
                    color: '#838383',
                    pt: 1,
                  }}
                >
                  {data.month}
                </Typography>
              </Stack>
            </Box>
          ))
        )}
      </Stack>
    </Box>
  );
}
