import React from 'react';
import BarClickNoSnap from './component/CustomBarChart'; // Import the BarClickNoSnap component
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const BarComponent = () => {
  return (
    <Box
      sx={{
        border: '1px solid #EFF0F6',
        boxShadow: '0px 5px 20px 0px #0000000D',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '20px', // Optional for rounded corners
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
      }}
    >
      {/* Header */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '18px',
          color: '#7f7f7f',
          padding: '8px 16px',
          mb:1
        //   borderRadius: '5px',
        }}
      >
        Activity
      </Typography>
        <Divider/>
      {/* BarClickNoSnap Component */}
      <BarClickNoSnap />
    </Box>
  );
};

export default BarComponent;
