import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Skeleton } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const IndividualLeaderboard: React.FC = () => {
  const [userLeaderboardData, setUserLeaderboardData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setUserLeaderboardData(data.user_leaderboard); 
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchData();
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
        Individual Leaderboard
      </Typography>
      <Stack spacing={1} sx={{ marginTop: 2 }}>
        {userLeaderboardData.length > 0 ? (
          userLeaderboardData.map((user, index) => (
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
              <img
                src={user.image}
                alt={user.name}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                }}
              />

              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#000000',
                  }}
                >
                  {user.name}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#7f7f7f',
                    }}
                  >
                    Points: {user.points}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#7f7f7f',
                    }}
                  >
                    Accuracy: {user.accuracy_percentage}%
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
                {user.accuracy_percentage > user.previous_accuracy_percentage ? (
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
                <Skeleton variant="circular" width={42} height={42} />
                <Box sx={{ flexGrow: 1 }}>
                  <Skeleton variant="text" width="100%" height={20} sx={{ marginBottom: 1 }} />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Skeleton variant="text" width="30%" height={14} />
                    <Skeleton variant="text" width="30%" height={14} />
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

export default IndividualLeaderboard;
