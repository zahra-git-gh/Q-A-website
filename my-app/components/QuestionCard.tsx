import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface CardParams {
  title: string;
  description: string;
  createdAt: Date;
}
function QuestionCard({ title, description, createdAt }: CardParams) {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  console.log(formattedDate);
  return (
    <div>
      <Box display={"flex"} gap={2} paddingX={4} mb={4}>
        <Card
          sx={{
            width: "100%",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
          variant="outlined"
        >
          <CardActionArea
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mb={2}
              >
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="subtitle2">{`${formattedDate}`}</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button
          variant="text"
          color="inherit"
          sx={{
            padding: 3,
            "&:hover": {
              color: "red",
            },
          }}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </div>
  );
}
export default QuestionCard;
