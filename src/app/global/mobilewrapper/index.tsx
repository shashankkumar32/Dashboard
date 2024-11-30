"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BoltIcon from "@mui/icons-material/Bolt";
import PeopleIcon from "@mui/icons-material/People";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SettingsIcon from "@mui/icons-material/Settings";

const navItems = [
  { label: "Report", icon: <TrendingUpIcon />, route: "/report" },
  { label: "Library", icon: <BoltIcon />, route: "/library" },
  { label: "People", icon: <PeopleIcon />, route: "/people" },
  { label: "Activities", icon: <LocalActivityIcon />, route: "/activities" },
  { label: "Get Started", icon: <LightbulbIcon />, route: "/get-started" },
  { label: "Settings", icon: <SettingsIcon />, route: "/settings" },
];

const LayoutWrapperMobileNav = ({ children }: { children: React.ReactNode }) => {
  const [bottomNavVisible, setBottomNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  /* eslint-disable */
  const [navValue, setNavValue] = useState(0);
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLDivElement>(null);
  const [isAtRightEnd, setIsAtRightEnd] = useState(false); 


  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setBottomNavVisible(false);
      } else {
        setBottomNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToEnd = () => {
    if (bottomNavRef.current) {
      if (isAtRightEnd) {
        bottomNavRef.current.scrollTo({
          left: 0,
          behavior: "smooth", 
        });
      } else {
        bottomNavRef.current.scrollTo({
          left: bottomNavRef.current.scrollWidth,
          behavior: "smooth", 
        });
      }
      setIsAtRightEnd(!isAtRightEnd);
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          bgcolor: "white",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <IconButton disableRipple>
            <Box
              component="img"
              src="/TESLA.png"
              alt="Tesla Logo"
              height={15} 
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>{children}</Box>
      {bottomNavVisible && (
        <Box
          ref={bottomNavRef}
          sx={{
            position: "sticky",
            bottom: 0,
            width: "100%", 
            bgcolor: "white",
            boxShadow: "0px -2px 5px rgba(0,0,0,0.1)",
            overflowX: "hidden", 
            overflowY: "hidden", 
            whiteSpace: "nowrap", 
            zIndex: 1000, 
            padding: "10px 20px", 
          }}
        >
          {navItems.map((item, index) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
              onClick={() => setNavValue(index)}
            />
          ))}
        </Box>
      )}

      {/* Scroll to left or right button */}
      <Box
        ref={scrollButtonRef}
        onClick={scrollToEnd}
        sx={{
          position: "absolute",
          bottom: "100px", // Adjust as needed
          left: isAtRightEnd ? "50%" : "10px", // Center button when at right end
          transform: isAtRightEnd ? "translateX(-50%)" : "none", // Center it when at right end
          backgroundColor: "red",
          width: "40px",
          height: "40px",
          borderRadius: "100px", // Make it a circular button
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#FF5722", // Darker red on hover
          },
        }}
      >
      
        <Box
          sx={{
            width: "12px",
            height: "12px",
            backgroundColor: "white",
            borderRadius: "50%", // Make the button look like a red dot
          }}
        />
      </Box>
    </Box>
  );
};

export default LayoutWrapperMobileNav;
