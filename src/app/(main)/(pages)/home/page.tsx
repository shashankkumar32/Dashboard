
"use client";

import React from "react";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MetricsLayout from "./inc/box";
import WeakestTopics from "./inc/weakestTopics";
import StrongestTopics from "./inc/strongestTopics";
import IndividualLeaderboard from "./inc/IndividualLeaderboard";
import GroupsLeaderboard from "./inc/groupLeaderboard";
import BarComponent from "./inc/barComponent";
import Custom2Select from "./inc/component/cutom2select";
import Custom3Select from "./inc/component/custom3select";
import TimeFrameSelect from "./inc/component/customSelect";

const Page = () => {
  const handleDownload = async () => {
    try {

      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data.json");
      }
      const data = await response.json();
      const apiSecret = data.api_secret;

      if (!apiSecret) {
        throw new Error("API secret not found in data.json");
      }

      const postResponse = await fetch("/api/imgdownload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ api: apiSecret }),
      });

      if (!postResponse.ok) {
        throw new Error(`Failed to fetch image: ${postResponse.status}`);
      }


      const imageData = await postResponse.json();
      const base64Image = imageData.base64_string;
      const filename = imageData.filename || "downloaded_image.png";

      if (!base64Image) {
        throw new Error("No image data returned from the API");
      }
      const link = document.createElement("a");
      link.href = `data:image/png;base64,${base64Image}`;
      link.download = filename;
      link.click();
    } catch (error) {
      console.error("Error fetching or downloading image:", error);
    }
  };

  return (
    <Box sx={{ padding: { xs: "0px", md: "16px" } }}>
   
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "29.05px",
            color: "#000",
          }}
        >
          Report
        </Typography>

        <Button
          startIcon={<DownloadIcon sx={{ color: "#000" }} />}
          sx={{
            textTransform: "none",
            color: "#000",
            padding: 0,
            minWidth: "auto",
            background: "none",
            boxShadow: "none",
            "&:hover": {
              background: "none",
            },
          }}
          onClick={handleDownload}
        >
          Download
        </Button>
      </Box>

     
      <Divider />
      <Box sx={{ my: 2 }}>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={5} md={4}>
          <TimeFrameSelect />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Custom2Select />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Custom3Select />
        </Grid>
      </Grid>
    </Box>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mb: 4,
            gap: 4,
            "@media (max-width: 1410px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <MetricsLayout />
          </Box>
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <BarComponent />
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <WeakestTopics />
          </Grid>
          <Grid item xs={12} md={6}>
            <StrongestTopics />
          </Grid>
        </Grid>

        <Grid container sx={{ mt: 2 }} spacing={4}>
          <Grid item xs={12} md={6}>
            <IndividualLeaderboard />
          </Grid>
          <Grid item xs={12} md={6}>
            <GroupsLeaderboard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
