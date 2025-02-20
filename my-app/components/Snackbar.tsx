"use client";

import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
interface FinalAlertType {
  isSuccess: boolean;
  isError: boolean;
  open: boolean;
  handleCloseFunction: (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => void;
  successText: string;
}
function FinalAlert({
  isSuccess,
  isError,
  open,
  handleCloseFunction,
  successText,
}: FinalAlertType) {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseFunction}>
      {isSuccess && !isError ? (
        <Alert
          onClose={handleCloseFunction}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {successText}
        </Alert>
      ) : isError && !isSuccess ? (
        <Alert severity="error">Something went wrong. please try again</Alert>
      ) : (
        <></>
      )}
    </Snackbar>
  );
}
export default FinalAlert;
