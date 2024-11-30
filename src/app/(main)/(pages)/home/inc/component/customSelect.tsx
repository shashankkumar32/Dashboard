import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Box, Typography } from '@mui/material';

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
          borderRadius: '30px', 
          backgroundColor: '#FFFFFF', 
          border: '1px solid #EFF0F6',
          paddingLeft: 1, 
          height: '36px', 
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px', 
          },
          '& fieldset': {
            border: 'none',
          },
          '&:hover': {
            backgroundColor: '#FFFFFF', 
          },
          '&.Mui-focused': {
            backgroundColor: '#FFFFFF', 
            borderColor: '#EFF0F6', 
          },
          '& .MuiInputLabel-root': {
            transform: 'none', 
            color: '#000000',
          },
         
          ...(open && {
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            '& .MuiMenu-paper': {
              borderBottomLeftRadius: '60px', 
              borderBottomRightRadius: '60px', 
            },
          }),
        }}
        renderValue={(selected) =><Box sx={{display:"flex"}}>
             <Typography
        sx={{
      
          fontWeight: 600,           
          fontSize: '16px',          
          lineHeight: '18px',        
          letterSpacing: '-0.3px',   
          color: '#888888', 
          mr:1         
        }}
      > TimeFrame :</Typography>       <Typography
      sx={{
   
        fontWeight: 300,           
        fontSize: '16px',          
        lineHeight: '18px',        
        letterSpacing: '-0.3px',   
        color: '#232323',          
      }}
    > {selected}</Typography> </Box>}
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
