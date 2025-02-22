"use client";
import { Box, Container, SnackbarCloseReason } from "@mui/material";
import QuestionCard from "./QuestionCard";
import { useFilterStore } from "@/zustand/store";
import FinalAlert from "./Snackbar";
import React from "react";
import { deleteItem } from "@/utils/action";
interface Question {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
interface CardsContainerParams {
  data: Question[];
}
function QuestionCardsContainer({ data }: CardsContainerParams) {
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { searchValue, isSortByNewer, isSortByOlder } = useFilterStore(
    (state) => state
  );
  const filteredData = data
    .filter((q) => q.title.includes(searchValue))
    .slice()
    .sort((a, b) => {
      if (isSortByNewer) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (isSortByOlder) {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      } else {
        return 0;
      }
    });
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box>
        {filteredData.map((question) => {
          async function deleteQuestion() {
            console.log("in delete question functionality");
            try {
              setIsError(false);
              setIsSuccess(false);
              setIsLoading(true);
              await deleteItem(
                `http://localhost:3000/api/questions/${question.id}`,
                "question"
              );

              setIsSuccess(true);

              setOpen(true);
            } catch (error) {
              setIsError(true);
              console.log(error);
            } finally {
              setIsLoading(false);
            }
          }
          return (
            <QuestionCard
              description={question.description}
              title={question.title}
              createdAt={question.createdAt}
              submitFuctionality={deleteQuestion}
              isLoading={isLoading}
              key={question.id}
              id={question.id}
            />
          );
        })}
        <FinalAlert
          isSuccess={isSuccess}
          isError={isError}
          open={open}
          handleCloseFunction={handleClose}
          successText="Question deleted."
        />
      </Box>
    </Container>
  );
}
export default QuestionCardsContainer;
