"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

function DescriptionBlock() {
  return (
    <Container maxWidth="lg" sx={{ mt: 20 }}>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", lg: "row-reverse" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={"100%"} height={"100%"} maxWidth={"500px"}>
          <Image
            src={"/FAQ.jpg"}
            width={300}
            height={200}
            alt="faq"
            layout="responsive"
            style={{borderRadius:"10px"}}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          maxWidth={"500px"}
          p={4}
        >
          <Typography sx={{ letterSpacing: "3px" }}>
            Find Your Answer
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              mt: 1,
              fontWeight: "bold",
            }}
          >
            Questions and Answers
          </Typography>
          <Typography variant="subtitle1" sx={{ my: 2 }}>
            {
              "Looking for answers? You've come to the right place! Our community is here to help with reliable, insightful answers to all your questions. Whether you;re here to learn, share your expertise, or just browse, we're excited to have you."
            }
          </Typography>
          <Button color="primary" variant="contained">
            GO TO QUESTIONS
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default DescriptionBlock;
