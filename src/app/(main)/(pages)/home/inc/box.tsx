
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Skeleton } from "@mui/material";

const MetricsLayout = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);
  if (!data) {
    return (
      <Box sx={{ pt: 0, display: "block" }}>
        {/* Top Row */}
        <Grid container spacing={2} justifyContent="center">
          {[...Array(3)].map((_, index) => (
            <Grid item key={index}>
              <Skeleton variant="rectangular" width={173} height={156.4} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          {[...Array(3)].map((_, index) => (
            <Grid item key={index}>
              <Skeleton variant="rectangular" width={173} height={156.4} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  const topMetrics = [
    { key: "Active Users", value: `${data?.metrics.active_users.current}/${data.metrics.active_users.total}` },
    { key: "Questions Answered", value: data.metrics.questions_answered },
    { key: "Av. Session Length", value: data.metrics.average_session_length_seconds },
  ];

  const bottomMetrics = [
    { key: "Starting Knowledge", value: data?.metrics.starting_knowledge_percentage +"%"},
    { key: "Current Knowledge", value: data.metrics.current_knowledge_percentage+"%" },
    { key: "Knowledge Gain", value: data.metrics.current_knowledge_percentage - data.metrics.starting_knowledge_percentage+"%" },
  ];
  const GraphImage = <img src="/Graph.png" alt="Graph" />;

  const renderBox = (metric: { key: string; value: number | string }, children?: React.ReactNode) => (
    <Box
      sx={{
        width: "176px",
        height: "156.4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
            fontSize: "14px",
            lineHeight: "17px",
            textAlign: "left",
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
      <Box>{children}</Box>
    </Box>
  );

  

  return (
    <Box sx={{ pt: 0, display: "block" }}>
      <Grid container spacing={2} justifyContent="center">
        {topMetrics.map((metric, index) => (
          <Grid item key={index}>
            {renderBox(metric)}
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
        {bottomMetrics.map((metric, index) => (
          <Grid item key={index}>
            {renderBox(metric, GraphImage)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MetricsLayout;
