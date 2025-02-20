"use client";

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface CheckModalType {
  openAlert: boolean;
  isLoading: boolean;
  handleCloseAlert: () => void;
  submitFuctionality: () => void;
}

function CheckModal({
  openAlert,
  isLoading,
  handleCloseAlert,
  submitFuctionality,
}: CheckModalType) {
  return (
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
          onClick={submitFuctionality}
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
  );
}

export default CheckModal;
