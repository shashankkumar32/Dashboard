"use client";
import React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BoltIcon from "@mui/icons-material/Bolt";
import PeopleIcon from "@mui/icons-material/People";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 230; // Drawer width

interface Props {
  children: React.ReactNode;
}

const drawerItems = [
  { label: "Report", icon: <TrendingUpIcon /> },
  { label: "Library", icon: <BoltIcon /> },
  { label: "People", icon: <PeopleIcon /> },
  { label: "Activities", icon: <LocalActivityIcon /> },
  { heading: "Support", textColor: "gray.500" },
  { label: "Get Started", icon: <LightbulbIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
];

export default function LayoutWrapperSideBar({ children }: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between", // Ensures bottom content stays at the very end
      }}
    >
      {/* Top Section */}
      <Box>
        {/* TESLA Logo */}
        <Toolbar>
          <Box component="img" src="/TESLA.png" alt="Tesla Logo" width="100%" />
        </Toolbar>

        {/* List of Drawer Items */}
        <List>
          {drawerItems.map((item, index) =>
            item.heading ? (
              <Typography
                key={index}
                variant="subtitle1"
                sx={{ color: item.textColor, px: 2, mt: 2 }}
              >
                {item.heading}
              </Typography>
            ) : (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    backgroundColor: selectedIndex === index ? "#1B59F81A" : "transparent",
                    borderRadius: "10px",
                    px: 2,
                    mb: 0.5,
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box>
        <Divider />
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Same Wheeler
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", bgcolor: "#F9F9F9" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              boxShadow: "0px 5px 20px 0px #0000000D",
              padding: "20px",
              border: "none",
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
          // height: "100vh",
          bgcolor: "#F9F9F9",
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
