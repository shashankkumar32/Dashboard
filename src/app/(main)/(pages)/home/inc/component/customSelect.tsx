import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

const TimeFrameSelect: React.FC = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>('ALL-time');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedTimeFrame(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth size="small">
      <Select
        labelId="time-frame-select-label"
        value={selectedTimeFrame}
        onChange={handleChange}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        fullWidth
        defaultValue="ALL-time"
        sx={{
          borderRadius: '30px', // Smaller border radius for a more compact appearance
          backgroundColor: '#FFFFFF', // Set background color to white
          border: '1px solid #EFF0F6',
          paddingLeft: 1, // Reduce padding for a more compact look
          height: '36px', // Set fixed height for smaller size
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px', // Adjust padding for smaller size
          },
          '& fieldset': {
            border: 'none', // Removes the border around the select
          },
          '&:hover': {
            backgroundColor: '#FFFFFF', // Ensures the background stays white on hover
          },
          '&.Mui-focused': {
            backgroundColor: '#FFFFFF', // Keeps the background white when focused
            borderColor: '#EFF0F6', // Keeps the border color as specified
          },
          '& .MuiInputLabel-root': {
            transform: 'none', // Prevents the label from squeezing when focused
            color: '#000000', // Keeps the label color black
          },
          // Conditionally change border-radius when dropdown is open
          ...(open && {
            borderBottomLeftRadius: '60px', // Fully round bottom-left radius when open
            borderBottomRightRadius: '60px', // Fully round bottom-right radius when open
            '& .MuiMenu-paper': {
              borderBottomLeftRadius: '60px', // Fully round bottom-left radius for the dropdown
              borderBottomRightRadius: '60px', // Fully round bottom-right radius for the dropdown
            },
          }),
        }}
        renderValue={(selected) => `TimeFrame: ${selected}`}
      >
        <MenuItem value="ALL-time">ALL-time</MenuItem>
        <MenuItem value="Last 7 Days">Last 7 Days</MenuItem>
        <MenuItem value="This Month">This Month</MenuItem>
        <MenuItem value="This Year">This Year</MenuItem>
        <MenuItem value="Custom">Custom</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TimeFrameSelect;
