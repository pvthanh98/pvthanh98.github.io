import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBarComponent from "../components/common/app-bar";
import AppBarChatComponent from "../components/common/app-bar-chat";
import AppBarOnlyLogoComponent from "../components/common/app-bar-only-logo";

interface AppLayoutProps {
  children: React.ReactNode
}

function ChatLayout({ children }: AppLayoutProps) {
  return (
    <Box
      display='flex'
      justifyContent={'center'}
      paddingTop={'8px'}
      sx={{
        backgroundColor: "#173948",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          '@media (max-width: 590px)': {
            minWidth: "100%",
          },
          '@media (min-width: 600px)': {
            minWidth: "70vh",
          },
        }}
      >
        <AppBarChatComponent />
        <Box
          sx={{
            outline: "2px solid #173948",
            padding: "0xpx 8px 8px 8px",
            minHeight: "88vh",
            borderRadius: "12px",
            backgroundColor: "#f0f0f0",
          }}
        >
          {children}
        </Box >
      </Box>
    </Box>
  );
}

export default ChatLayout;