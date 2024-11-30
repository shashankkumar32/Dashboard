"use client";
import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CustomBarChart from './inc/component/CustomBarChart';
import MetricsLayout from './inc/box';
import WeakestTopics from './inc/weakestTopics';
import { Grid } from "@mui/material";
import StrongestTopics from './inc/strongestTopics';
import IndividualLeaderboard from './inc/IndividualLeaderboard';
import GroupsLeaderboard from './inc/groupLeaderboard';
import VerticalProgressBar from './inc/component/VerticalProgressBar';
import VerticalMeter from './inc/component/customverticalmeter';
import BarComponent from './inc/barComponent';
import TimeFrameSelect from './inc/component/customSelect';
import Custom2Select from './inc/component/cutom2select';
import Custom3Select from './inc/component/custom3select';

const Page = () => {
  const handleDownload = async () => {
    try {
      // Fetch the data.json file from the public folder
      const response = await fetch('/data.json');
      const data = await response.json();

      // Extract the api_secret value
      const apiSecret = data.api_secret;

      if (!apiSecret) {
        console.error("API secret not found");
        return;
      }

      // Prepare the POST request to send the api_secret
      const postResponse = await fetch('https://testd5-img.azurewebsites.net/api/imgdownload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ api: apiSecret }), // Send the api_secret in the body
      });

      if (!postResponse.ok) {
        console.error('Failed to fetch image');
        return;
      }

      // Parse the response to get the Base64 image string
      const imageData = await postResponse.json();
      const base64Image = imageData.image; // Assuming the response contains the Base64 string under "image"

      if (!base64Image) {
        console.error('No image data returned');
        return;
      }

      // Create a downloadable link for the image
      const link = document.createElement('a');
      link.href = `data:image/png;base64,${base64Image}`; // Use the appropriate MIME type
      link.download = 'downloaded_image.png'; // Name of the downloaded file
      link.click(); // Trigger the download
    } catch (error) {
      console.error('Error fetching data or downloading image:', error);
    }
  };

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
          onClick={handleDownload} // Handle the download click
        >
          Download
        </Button>
      </Box>
          <Box sx={{display:"flex"}}>
      <TimeFrameSelect />
< Custom2Select/>

      <Custom3Select/>
          </Box>

      {/* Divider */}
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={4}>
          {/* Metrics Layout */}
          <Grid item xs={12} md={6}>
            <MetricsLayout />
          </Grid>

          {/* Custom Bar Chart */}
          <Grid item xs={12} md={6}>
            <BarComponent />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Weakest Topics */}
          <Grid item xs={12} md={6}>
            <WeakestTopics />
          </Grid>

          {/* Strongest Topics */}
          <Grid item xs={12} md={6}>
            <StrongestTopics />
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }} spacing={4}>
          {/* Individual Leaderboard */}
          <Grid item xs={12} md={6}>
            <IndividualLeaderboard />
          </Grid>

          {/* Groups Leaderboard */}
          <Grid item xs={12} md={6}>
            <GroupsLeaderboard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
