import Navbar from "@/components/Navbar";
import QuestionCardsContainer from "@/components/QuestionCardsContainer";
import QuestionsHeader from "@/components/QuestionsHeader";
import { Box } from "@mui/material";

export default async function QuestionPage() {
  const res = await fetch("http://localhost:3000/api/questions", {
    next: { tags: ["question"] },
  });
  const questions = await res.json();
  return (
    <div>
      <Navbar />
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        // style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <QuestionsHeader />
        <QuestionCardsContainer data={questions.data} />
      </Box>
    </div>
  );
}
