import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CustomProgressBar from './component/customProgressBar'; // Ensure this import is correct

const WeakestTopics: React.FC = () => {
  const [weakestTopicsData, setWeakestTopicsData] = useState<any[]>([]);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust the path if needed
        const data = await response.json();
        setWeakestTopicsData(data.topics.weakest); // Set the weakest topics from the JSON file
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        border: '1px solid #EFF0F6',
        boxShadow: '0px 5px 20px 0px #0000000D',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        padding: 2,
      }}
    >
      {/* Heading */}
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
        Weakest Topics
      </Typography>

      {/* Topics stacked vertically */}
      <Stack spacing={2} sx={{ marginTop: 2 }}>
        {weakestTopicsData.map((topic, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              padding: 1,
            }}
          >
            {/* Image */}
            <img
              src={topic.image}
              alt={topic.name}
              style={{ width: '49px', height: '32px', borderRadius: '4px' }}
            />

            {/* Name and Progress */}
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
                color1="linear-gradient(to right, #FFDFE5 , #FFE1DE)"
                color2="linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)"
                value={topic.correct_percentage}
              />
            </Box>

            {/* Percentage */}
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
                variant="h6"
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
        ))}
      </Stack>
    </Box>
  );
};

export default WeakestTopics;
