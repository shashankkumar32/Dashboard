"use client"
import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CustomBarChart from './inc/component/CustomBarChart';
import MetricsLayout from './inc/box';
import WeakestTopics from './inc/weakestTopics';

import {  Grid } from "@mui/material";
import StrongestTopics from './inc/strongestTopics';
import IndividualLeaderboard from './inc/IndividualLeaderboard';
import GroupsLeaderboard from './inc/groupLeaderboard';
import VerticalProgressBar from './inc/component/VerticalProgressBar';
import VerticalMeter from './inc/component/customverticalmeter';
import BarComponent from './inc/barComponent';
import TimeFrameSelect from './inc/component/customSelect';


const Page = () => {

  return (
    <Box sx={{ padding: '16px' }}>
      {/* Header Section */}
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '29.05px',
            color: '#000', // Black color for the text
          }}
        >
          Report
        </Typography>

        {/* Download Button */}
        <Button
          startIcon={<DownloadIcon sx={{ color: '#000' }} />} // Black icon
          sx={{
            textTransform: 'none',
            color: '#000', // Black text
            padding: 0,
            minWidth: 'auto', // Ensures no unnecessary padding
            background: 'none', // Blends with the background
            boxShadow: 'none', // Removes shadow
            '&:hover': {
              background: 'none', // Prevents hover effect background
            },
          }}
        >
          Download
        </Button>
      </Box>
<TimeFrameSelect/>
      {/* Divider */}
      <Divider />
      <Box sx={{ p: 2 }}>
      <Grid container spacing={4}>
        {/* Metrics Layout */}
        <Grid item xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}> */}
            <MetricsLayout />
          {/* </Paper> */}
        </Grid>

        {/* Custom Bar Chart */}
        <Grid item xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}> */}
            <BarComponent />
          {/* </Paper> */}
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {/* Metrics Layout */}
        <Grid item xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}> */}
          <WeakestTopics/>
          {/* </Paper> */}
        </Grid>

        {/* Custom Bar Chart */}
        <Grid item xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}> */}
         
    <StrongestTopics/>
          {/* </Paper> */}
        </Grid>
      </Grid>
      <Grid container sx={{mt:2}} spacing={4}>
        {/* Metrics Layout */}
        <Grid item xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}> */}
          <IndividualLeaderboard/>
          {/* </Paper> */}
        </Grid>

        {/* Custom Bar Chart */}
        <Grid item xs={12} md={6}>
          {/* <Paper elevation={3} sx={{ p: 3, height: '100%' }}> */}
         
          <GroupsLeaderboard/>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Box>
 

    {/* <BorderLinearProgress variant="determinate" value={50} /> */}
  
    </Box>
  );
};

export default Page;
