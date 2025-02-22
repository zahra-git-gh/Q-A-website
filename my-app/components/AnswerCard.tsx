import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
interface AnswerCardParamsType {
  answerText: string;
}
function AnswerCard({ answerText }: AnswerCardParamsType) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {" "}
        <React.Fragment>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <CardContent sx={{ width: "100%" }}>
              <TextField fullWidth multiline rows={4} value={answerText} />
            </CardContent>
            <CardActions>
              <Button
                type="button"
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
            </CardActions>
          </Box>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export default AnswerCard;
