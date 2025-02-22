"use client";

import { Box, Button, TextField } from "@mui/material";
import CheckModal from "./CheckModal";
import { useState } from "react";
import { postAnswers } from "@/utils/action";
import FinalAlert from "./Snackbar";

function AnswerForm({ questionId }: { questionId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCloseAlert = () => setOpenAlert(false);
  async function submitForm() {
    try {
      setIsError(false);
      setIsSuccess(false);
      setIsLoading(true);
      const postData = await postAnswers({
        questionId: questionId,
        answer: answerText,
      });
      console.log(postData);
      setAnswerText("");
      setOpen(true);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setOpenAlert(false);
    }
  }
  return (
    <Box component={"form"} mt={3}>
      <TextField
        rows={5}
        multiline
        variant="filled"
        placeholder="Write your answer..."
        fullWidth
        required
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      <Button
        onClick={() => setOpenAlert(true)}
        sx={{ mt: 2 }}
        variant="contained"
        fullWidth
      >
        Submit
      </Button>
      <CheckModal
        isLoading={isLoading}
        openAlert={openAlert}
        handleCloseAlert={handleCloseAlert}
        submitFuctionality={submitForm}
      />
      <FinalAlert
        isError={isError}
        isSuccess={isSuccess}
        open={open}
        successText="Answer added successfully."
        handleCloseFunction={() => setOpen(false)}
      />
    </Box>
  );
}

export default AnswerForm;
