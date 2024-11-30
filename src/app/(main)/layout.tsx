"use client";
import React from "react";
import { useMediaQuery } from "@mui/material"; 
import LayoutWrapperMobileNav from "../global/mobilewrapper";
import LayoutWrapperSideBar from "../global/wrapperSidebar";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isMobile ? (
        <LayoutWrapperMobileNav>{children}</LayoutWrapperMobileNav>
      ) : (
        <LayoutWrapperSideBar>{children}</LayoutWrapperSideBar>
      )}
    </>
  );
};

export default Layout;
