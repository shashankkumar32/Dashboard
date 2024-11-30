import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, TextField, Divider, Chip, Radio, RadioGroup, FormControlLabel, FormLabel, Box, Typography } from '@mui/material';

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

        renderValue={()=> <Box sx={{display:"flex"}}>
        <Typography
   sx={{
 
     fontWeight: 600,           
     fontSize: '16px',          
     lineHeight: '18px',        
     letterSpacing: '-0.3px',   
     color: '#888888', 
     mr:1         
   }}
 >People :</Typography>       <Typography
 sx={{

   fontWeight: 300,           
   fontSize: '16px',          
   lineHeight: '18px',        
   letterSpacing: '-0.3px',   
   color: '#232323',          
 }}
>  Multiple Selected</Typography> </Box>}
      >
        
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


        <Divider sx={{ margin: '8px 0' }} />

       
        <Box sx={{ marginBottom: '2px' ,px:3}}>
          <FormLabel component="legend">Groups</FormLabel>
          <RadioGroup value={groupSelection} onChange={handleGroupChange}>
            <FormControlLabel value="AllUsers" control={<Radio />} label="All Users" />
            <FormControlLabel value="Managers" control={<Radio />} label="Managers" />
            <FormControlLabel value="Trainer" control={<Radio />} label="Trainer" />
          </RadioGroup>
        </Box>

        <Divider sx={{ margin: '4px 0' }} />

    
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
