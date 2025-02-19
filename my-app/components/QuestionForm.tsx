"use client";

import { postQuestion } from "@/utils/action";
import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
function QuestionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  async function submitForm() {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      const result = await postQuestion({ title, description });
      console.log(result);
      setIsSuccess(true);
      setOpen(true);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setTitle("");
      setDescription("");
      setIsLoading(false);
      setOpenAlert(false);
    }
  }
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          p={4}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Ask your question
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            component={"form"}
            width={"100%"}
            p={4}
            onSubmit={(e) => {
              e.preventDefault();
              handleClickOpenAlert();
            }}
            autoComplete="off"
          >
            <TextField
              required
              id="filled-required"
              label="Title"
              placeholder="Title"
              variant="filled"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              required
              id="filled-required"
              label="Description"
              placeholder="Description"
              multiline
              variant="filled"
              rows={3}
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ paddingY: "10px" }}
            >
              submit
            </Button>
          </Box>
        </Box>
      </Container>
      <div>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          {isSuccess && !isError ? (
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Question added successfully.
            </Alert>
          ) : isError && !isSuccess ? (
            <Alert severity="error">
              Something went wrong. please try again
            </Alert>
          ) : (
            <></>
          )}
        </Snackbar>

        <Dialog
          open={openAlert}
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xl"
          sx={{ minWidth: "700px", padding: 30 }}
        >
          <DialogTitle
            fontSize={{ xs: "1rem", md: "1.5rem", xl: "2rem" }}
            id="alert-dialog-title"
          >
            Are you sure?
          </DialogTitle>
          <DialogContent
            sx={{ width: { xs: "110px", lg: "600px" } }}
          ></DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => {
                handleCloseAlert();
              }}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              variant="contained"
              onClick={submitForm}
              autoFocus
            >
              {isLoading ? (
                <CircularProgress size="30px" sx={{ color: "white" }} />
              ) : (
                "Yes"
              )}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default QuestionForm;
