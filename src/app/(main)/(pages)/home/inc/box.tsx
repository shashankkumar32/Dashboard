import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const data = {
  metrics: {
    active_users: { current: 27, total: 80 },
    questions_answered: 3298,
    average_session_length_seconds: 154,
    starting_knowledge_percentage: 64,
    current_knowledge_percentage: 86,
  },
};

const MetricsLayout = () => {
  const topMetrics = [
    { key: "Current/27", value: `${data.metrics.active_users.current}/27` },
    { key: "Total Users", value: data.metrics.active_users.total },
    { key: "Questions Answered", value: data.metrics.questions_answered },
  ];

  const bottomMetrics = [
    { key: "Average Session ", value: data.metrics.average_session_length_seconds },
    { key: "Start Knowledge ", value: data.metrics.starting_knowledge_percentage },
    { key: "Current Knowledge ", value: data.metrics.current_knowledge_percentage },
  ];

  const renderBox = (metric: { key: string; value: number | string }) => (
    <Box
      sx={{
        width: "173px",
        height: "152.4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Space between key and value
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        border: "1px solid #EFF0F6",
        boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
        padding: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#4d4d4d",
          fontWeight: 600,
          // fontFamily: "Inter",
          fontSize: "14px", // Adjusted height for key text
          lineHeight: "17px",
          textAlign: "left", // Align key text to the left
        }}
      >
        {metric.key}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#000000",
          fontWeight: 700,
          fontFamily: "Inter",
          fontSize: "24px",
          lineHeight: "29.05px",
          marginTop: 1,
          textAlign: "center",
        }}
      >
        {metric.value}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ p: 2 }}>
      {/* Top Row */}
      <Grid container spacing={2} justifyContent="center">
        {topMetrics.map((metric, index) => (
          <Grid item key={index}>
            {renderBox(metric)}
          </Grid>
        ))}
      </Grid>

      {/* Bottom Row */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        {bottomMetrics.map((metric, index) => (
          <Grid item key={index}>
            {renderBox(metric)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MetricsLayout;
