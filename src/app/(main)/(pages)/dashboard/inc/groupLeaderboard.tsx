import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Skeleton } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const GroupsLeaderboard: React.FC = () => {
  /* eslint-disable */
  const [groupsLeaderboardData, setGroupsLeaderboardData] = useState<any>([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setGroupsLeaderboardData(data.groups_leaderboard); 
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
      
      <Stack spacing={2} sx={{ marginTop: 2 }}>
      /* eslint-disable */
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
          <>
            {[...Array(4)].map((_, index) => (
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
                <Box sx={{ flexGrow: 1 }}>
                  <Skeleton variant="text" width="100%" height={15} sx={{ marginBottom: 1 }} />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Skeleton variant="text" width="30%" height={10} />
                    <Skeleton variant="text" width="30%" height={10} />
                  </Box>
                </Box>
                <Skeleton variant="rectangular" width={24} height={24} />
              </Box>
            ))}
          </>
        )}
      </Stack>
    </Box>
  );
};

export default GroupsLeaderboard;
