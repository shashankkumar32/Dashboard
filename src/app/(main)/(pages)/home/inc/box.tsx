import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const MetricsLayout = () => {
  const [data, setData] = useState<any>(null);

  // Fetch data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json"); // Path to your JSON file
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <Typography>Loading...</Typography>; // Display loading message while fetching
  }

  const topMetrics = [
    { key: "Active Users", value: `${data.metrics.active_users.current}/${data.metrics.active_users.total}` },
    { key: "Questions Answered", value: data.metrics.questions_answered },
    { key: "Av. Session Length", value: data.metrics.average_session_length_seconds },
  ];

  const bottomMetrics = [
    { key: "Starting Knowledge", value: data.metrics.starting_knowledge_percentage },
    { key: "Current Knowledge", value: data.metrics.current_knowledge_percentage },
    { key: "Knowledge Gain", value: data.metrics.current_knowledge_percentage - data.metrics.starting_knowledge_percentage },
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
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: "#000000B2",
            fontWeight: 600,
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
    </Box>
  );

  return (
    <Box sx={{ p: 2 }}>
      {/* Top Row */}
      <Grid container spacing={1} justifyContent="center">
        {topMetrics.map((metric, index) => (
          <Grid item key={index}>
            {renderBox(metric)}
          </Grid>
        ))}
      </Grid>

      {/* Bottom Row */}
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
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
