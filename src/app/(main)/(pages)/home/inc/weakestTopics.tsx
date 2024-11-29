import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CustomProgressBar from "./inc/component/customProgressBar"

const WeakestTopics: React.FC = () => {
  // Styled LinearProgress with gradient and shadow
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      background: 'linear-gradient(to right, #FFDFE5 , #FFE1DE)',
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background: 'linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

  // Weakest topics data
  const weakestTopicsData = [
    {
      name: 'Food Safety',
      image: 'https://placehold.co/49x32',
      correct_percentage: 74,
    },
    {
      name: 'Compliance Basics Procedures',
      image: 'https://placehold.co/49x32',
      correct_percentage: 52,
    },
    {
      name: 'Company Networking',
      image: 'https://placehold.co/49x32',
      correct_percentage: 36,
    },
  ];

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
        //   fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '18px',
          color: '#7f7f7f',
        //   backgroundColor: '#EFF0F6',
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
            //   borderBottom: index !== weakestTopicsData.length - 1 ? '1px solid #EFF0F6' : 'none',
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
                //   fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '18px',
                  color: '#000000',
                  marginBottom: 0.5,
                }}
              >
                {topic.name}
              </Typography>
              <CustomProgressBar variant="determinate" color1="linear-gradient(to right, #FFDFE5 , #FFE1DE)" color2="linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)" value={topic.correct_percentage} />
              <BorderLinearProgress variant="determinate" value={topic.correct_percentage} />
            </Box>

            {/* Percentage */}
            
            <Box
            //   variant="body2"
              sx={{
                // fontFamily: 'Inter',
              
                display:"flex",
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#000000',
                // width: '50px',
                textAlign: 'right',
              }}
            >
              {topic.correct_percentage}%
            <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
        //   fontFamily: 'Inter',
          fontSize: '14px',
          lineHeight: '18px',
          color: '#7f7f7f',
        //   backgroundColor: '#EFF0F6',
        //   padding: '8px 16px',
        //   borderRadius: '5px',
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
