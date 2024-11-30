import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, TextField, Divider, Chip, Radio, RadioGroup, FormControlLabel, FormLabel, Box } from '@mui/material';

const Custom2Select: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]); // Store selected items as chips
  const [open, setOpen] = useState<boolean>(false); // Track dropdown state
  const [searchQuery, setSearchQuery] = useState<string>(''); // Store search query
  const [groupSelection, setGroupSelection] = useState<string>('');
  const [userSelection, setUserSelection] = useState<string>('');

  const handleChipDelete = (chip: string) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item !== chip));
  };

  const handleGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const group = event.target.value;
    setGroupSelection(group);
    if (!selectedItems.includes(group)) {
      setSelectedItems((prev) => [...prev, group]);
    }
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const user = event.target.value;
    setUserSelection(user);
    if (!selectedItems.includes(user)) {
      setSelectedItems((prev) => [...prev, user]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth size="small">
      <Select
        labelId="custom-select-label"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value=""
        displayEmpty
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
              borderBottomLeftRadius: '0px', // Fully round bottom-left radius when open
              borderBottomRightRadius: '0px', // Fully round bottom-right radius when open
              '& .MuiMenu-paper': {
                borderBottomLeftRadius: '60px', // Fully round bottom-left radius for the dropdown
                borderBottomRightRadius: '60px', // Fully round bottom-right radius for the dropdown
              },
            }),
          }}

        renderValue={()=>`People: Multiple Selected`}
      >
        {/* Display selected items as chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '8px' }}>
          {selectedItems.map((item, index) => (
            <Chip
              key={index}
              label={item}
              onDelete={() => handleChipDelete(item)}
              sx={{
                backgroundColor: '#EFF0F6',
                fontSize: '12px',
                color: '#4D4D4D',
              }}
            />
          ))}
        </Box>

        {/* Search Bar */}
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            margin: '8px 0',
            '& .MuiInputBase-root': {
              borderRadius: '30px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EFF0F6',
            },
          }}
        />

        {/* Divider */}
        <Divider sx={{ margin: '8px 0' }} />

        {/* Groups Section */}
        <Box sx={{ marginBottom: '2px' ,px:3}}>
          <FormLabel component="legend">Groups</FormLabel>
          <RadioGroup value={groupSelection} onChange={handleGroupChange}>
            <FormControlLabel value="AllUsers" control={<Radio />} label="All Users" />
            <FormControlLabel value="Managers" control={<Radio />} label="Managers" />
            <FormControlLabel value="Trainer" control={<Radio />} label="Trainer" />
          </RadioGroup>
        </Box>

        <Divider sx={{ margin: '4px 0' }} />

        {/* Users Section */}
        <Box sx={{ marginBottom: '8px',px:3 }}>
          <FormLabel component="legend">Users</FormLabel>
          <RadioGroup value={userSelection} onChange={handleUserChange}>
            <FormControlLabel value="Adrian Lu" control={<Radio />} label="Adrian Lu" />
            <FormControlLabel value="Evelyn Hamilton" control={<Radio />} label="Evelyn Hamilton" />
          </RadioGroup>
        </Box>
      </Select>
    </FormControl>
  );
};

export default Custom2Select;
