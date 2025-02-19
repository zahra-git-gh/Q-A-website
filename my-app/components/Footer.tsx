"use client";

import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
function Footer() {
  return (
    <Box
      width={"100%"}
      bgcolor={"#1976d2"}
      display={"flex"}
      p={6}
      alignItems={{ xs: "center" }}
      gap={{ xs: 3, md: 0 }}
      justifyContent={{ md: "space-between" }}
      flexDirection={{ xs: "column", md: "row" }}
      position={"relative"}
      bottom={0}
    >
      <Typography color="white" variant="subtitle1">
        @2025, All rights reserved.
      </Typography>
      <Box display={"flex"} gap={4}>
        <InstagramIcon sx={{ color: "white" }} />
        <LinkedInIcon sx={{ color: "white" }} />
        <FacebookIcon sx={{ color: "white" }} />
        <TelegramIcon sx={{ color: "white" }} />
      </Box>
    </Box>
  );
}

export default Footer;
