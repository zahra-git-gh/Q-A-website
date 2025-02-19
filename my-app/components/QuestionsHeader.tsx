"use client";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useFilterStore } from "@/zustand/store";

function QuestionsHeader() {
  const { setSearchValue, searchValue } = useFilterStore((state) => state);
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 20 }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={3}
        >
          <Typography variant="h3" component={"h3"}>
            Questions
          </Typography>
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 500,
              border: "1px solid blue",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </Paper>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            maxWidth={400}
            width={"100%"}
            alignItems={"center"}
          >
            <Typography variant="subtitle1" component={"p"}>
              Filter By:
            </Typography>
            <Button sx={{ padding: 2 }} variant="text" color="inherit">
              <ArrowDownwardIcon />
              Newer
            </Button>
            <Button sx={{ padding: 2 }} variant="text" color="inherit">
              <ArrowDownwardIcon />
              Older
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default QuestionsHeader;
