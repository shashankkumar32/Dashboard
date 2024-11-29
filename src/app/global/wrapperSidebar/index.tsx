"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 230; // Drawer width

interface Props {
  children:React.ReactNode
  window?: () => Window;
}

export default function LayoutWrapperSideBar({children ,window}: Props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handleDrawerClose = () => setMobileOpen(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleListItemClick(index)}
              sx={{
                backgroundColor: selectedIndex === index ? '#1B59F81A' : 'transparent',
                borderRadius: '10px',
                paddingX: '10px', // Padding inside list items
                boxShadow: 'none', // Remove box shadow from options
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleListItemClick(index)}
              sx={{
                backgroundColor: selectedIndex === index ? '#1B59F81A' : 'transparent',
                borderRadius: '10px',
                paddingX: '10px', // Padding inside list items
                boxShadow: 'none', // Remove box shadow from options
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', bgcolor:"#F9F9F9" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0px 5px 20px 0px #0000000D', // Box shadow added to drawer
              padding: '20px', // Padding inside the drawer
              border: 'none', // Removed the border of the drawer
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0px 5px 20px 0px #0000000D', // Box shadow added to drawer
              padding: '20px', // Padding inside the drawer
              border: 'none', // Removed the border of the drawer
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          // flexGrow: 1,
          height:"100vh",
          bgcolor:"#F9F9F9",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {
          children
        }
      </Box>
    </Box>
  );
}
