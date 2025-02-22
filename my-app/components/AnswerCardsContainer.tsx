"use client";

import { useState } from "react";
import AnswerCard from "./AnswerCard";
import FinalAlert from "./Snackbar";
import { deleteItem } from "@/utils/action";

function AnswerCardsContainer({
  data,
}: {
  data: { questionId: string; answer: string; id: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {data.map(
        (answer: { id: string; questionId: string; answer: string }) => {
          async function deleteAnswer() {
            try {
              setIsSuccess(false);
              setIsError(false);
              setIsLoading(true);
              await deleteItem(
                `http://localhost:3000/api/answers/${answer.id}`,
                "answer"
              );
              setIsSuccess(true);
            } catch (error) {
              console.log(error);
              setIsError(true);
            } finally {
              setOpen(true);
              setIsLoading(false);
            }
          }
          return (
            <div key={answer.id}>
              <AnswerCard
                answerId={answer.id}
                key={answer.id}
                answerText={answer.answer}
                submitFuctionality={deleteAnswer}
                isLoading={isLoading}
              />
              <FinalAlert
                isError={isError}
                isSuccess={isSuccess}
                open={open}
                successText="Answer deleted successfully."
                handleCloseFunction={() => setOpen(false)}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
export default AnswerCardsContainer;
