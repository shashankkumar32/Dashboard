import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Skeleton } from '@mui/material';
import CustomProgressBar from './component/customProgressBar';

const StrongestTopics: React.FC = () => {
  /* eslint-disable */
  const [strongestTopicsData, setStrongestTopicsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setStrongestTopicsData(data.topics.strongest);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);  
      });
  }, []);

  return (
    <Box
      sx={{
        border: '1px solid #EFF0F6',
        boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        padding: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '18px',
          color: '#7f7f7f',
          padding: '8px 16px',
          borderRadius: '5px',
        }}
      >
        Strongest Topics
      </Typography>

      <Stack spacing={2} sx={{ marginTop: 2 }}>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 1 }}>
              <Skeleton variant="rectangular" width={49} height={32} sx={{ borderRadius: 1 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Skeleton width="80%" height={20} sx={{ marginBottom: 1 }} />
                <Skeleton width="40%" height={10} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Skeleton width={30} height={20} />
              </Box>
            </Box>
          ))
        ) : (
          strongestTopicsData.map((topic, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 1,
              }}
            >
              <img
                src={topic.image}
                alt={topic.name}
                style={{ width: '49px', height: '32px', borderRadius: '4px' }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#000000',
                    marginBottom: 0.5,
                  }}
                >
                  {topic.name}
                </Typography>
                <CustomProgressBar
                  color1="linear-gradient(to right, #E8F9E9 , #E6F7FB)"
                  color2="linear-gradient(143.13deg, #3ACB5D 5.36%, #4BADE8 94.64%)"
                  value={topic.correct_percentage}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '18px',
                  color: '#000000',
                  textAlign: 'right',
                }}
              >
                {topic.correct_percentage}%
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#7f7f7f',
                  }}
                >
                  Correct
                </Typography>
              </Box>
            </Box>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default StrongestTopics;
