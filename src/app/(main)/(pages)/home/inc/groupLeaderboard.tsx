import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const GroupsLeaderboard: React.FC = () => {
  const [groupsLeaderboardData, setGroupsLeaderboardData] = useState<any>([]);

  // Fetch the data from the JSON file
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch('/data.json'); // File in public directory
        const data = await response.json();
        setGroupsLeaderboardData(data.groups_leaderboard); // Using the data from the JSON file
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
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
        Groups Leaderboard
      </Typography>

      {/* Leaderboard Entries */}
      <Stack spacing={2} sx={{ marginTop: 2 }}>
        {groupsLeaderboardData.length > 0 ? (
          groupsLeaderboardData.map((group: any, index: number) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 1,
                borderRadius: '5px',
              }}
            >
              {/* Name and Details */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  {group.group_name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#7f7f7f',
                    }}
                  >
                    Points/User: {group.points_per_user}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#7f7f7f',
                    }}
                  >
                    Accuracy: {group.accuracy_percentage}%
                  </Typography>
                </Box>
              </Box>

              {/* Triangle Indicator */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {group.accuracy_percentage > group.previous_accuracy_percentage ? (
                  <ArrowDropUpIcon sx={{ color: 'green' }} />
                ) : (
                  <ArrowDropDownIcon sx={{ color: 'red' }} />
                )}
              </Box>
            </Box>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default GroupsLeaderboard;
