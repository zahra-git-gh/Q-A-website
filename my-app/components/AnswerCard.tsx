"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckModal from "./CheckModal";
import { editAnswer } from "@/utils/action";

interface AnswerCardParamsType {
  answerText: string;
  answerId: string;
  isLoading: boolean;
  submitFuctionality: () => void;
}
function AnswerCard({
  answerText,
  answerId,
  isLoading,
  submitFuctionality,
}: AnswerCardParamsType) {
  const [openAlert, setOpenAlert] = React.useState(false);
  const [answerEditValue, setAnswerEditValue] = React.useState(answerText);
  async function edit(text: string) {
    try {
      await editAnswer(`http://localhost:3000/api/answers/${answerId}`, text);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    if (!answerEditValue) return;

    const timeout = setTimeout(() => {
      edit(answerEditValue);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timeout); // Cleanup on new input change
  }, [answerEditValue]);
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
              <TextField
                fullWidth
                multiline
                type="text"
                rows={4}
                value={answerEditValue}
                onChange={(e) => {
                  setAnswerEditValue(e.target.value);
                }}
              />
            </CardContent>
            <CardActions>
              <Button
                onClick={() => setOpenAlert(true)}
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
      <CheckModal
        openAlert={openAlert}
        isLoading={isLoading}
        submitFuctionality={submitFuctionality}
        handleCloseAlert={() => setOpenAlert(false)}
      />
    </Box>
  );
}

export default AnswerCard;
