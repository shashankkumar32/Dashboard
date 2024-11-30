import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CustomProgressBar from './component/customProgressBar';

const StrongestTopics: React.FC = () => {
  const [strongestTopicsData, setStrongestTopicsData] = useState<any[]>([]);

  // Fetching the JSON data from the local file or an API endpoint
  useEffect(() => {
    // Fetch data from the JSON file or API
    fetch('/data.json') // Adjust the path to where the JSON file is stored
      .then((response) => response.json())
      .then((data) => {
        // Update state with the strongest topics data
        setStrongestTopicsData(data.topics.strongest);
      })
      .catch((error) => console.error('Error fetching data:', error));
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
        Strongest Topics
      </Typography>

      {/* Topics stacked vertically */}
      <Stack spacing={2} sx={{ marginTop: 2 }}>
        {strongestTopicsData.map((topic, index) => (
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
                color1="linear-gradient(to right, #E8F9E9 , #E6F7FB)"
                color2="linear-gradient(143.13deg, #3ACB5D 5.36%, #4BADE8 94.64%)"
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

export default StrongestTopics;
